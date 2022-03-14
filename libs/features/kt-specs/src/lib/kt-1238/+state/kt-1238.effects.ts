import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1238Service } from '../services/kt-1238.service';
import * as Kt1238Actions from './kt-1238.actions';

@Injectable()
export class Kt1238Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1238Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1238Actions.loadKt1238Success({ data })),
          catchError(({ error }) => observableOf(Kt1238Actions.loadKt1238Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1238Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtKoseDikligi).pipe(
          map(({ data }) => Kt1238Actions.saveKt1238Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1238Actions.saveKt1238Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1238Actions.saveKt1238Success),
      map(() => Kt1238Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1238Service) {}
}
