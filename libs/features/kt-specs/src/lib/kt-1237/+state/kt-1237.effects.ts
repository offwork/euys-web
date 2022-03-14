import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1237Service } from '../services/kt-1237.service';
import * as Kt1237Actions from './kt-1237.actions';

@Injectable()
export class Kt1237Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1237Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1237Actions.loadKt1237Success({ data })),
          catchError(({ error }) => observableOf(Kt1237Actions.loadKt1237Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1237Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtKenarEgriligi).pipe(
          map(({ data }) => Kt1237Actions.saveKt1237Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1237Actions.saveKt1237Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1237Actions.saveKt1237Success),
      map(() => Kt1237Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1237Service) {}
}
