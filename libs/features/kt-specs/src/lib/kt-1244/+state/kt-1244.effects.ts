import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { Kt1244Service } from '../services/kt-1244.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as Kt1244Actions from './kt-1244.actions';

@Injectable()
export class Kt1244Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1244Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1244Actions.loadKt1244Success({ data })),
          catchError(({ error }) => observableOf(Kt1244Actions.loadKt1244Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1244Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtMarkalama).pipe(
          map(({ data }) => Kt1244Actions.saveKt1244Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1244Actions.saveKt1244Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1244Actions.saveKt1244Success),
      map(() => Kt1244Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1244Service) {}
}
