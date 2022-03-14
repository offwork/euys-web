import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1307Service } from '../services/kt-1307.service';
import * as Kt1307Actions from './kt-1307.actions';

@Injectable()
export class Kt1307Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1307Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1307Actions.loadKt1307Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1307Actions.loadKt1307Failure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1307Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpAmbalajPaket).pipe(
          map(({ data }) => Kt1307Actions.saveKt1307Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1307Actions.saveKt1307Failure({ error }))
          )
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1307Actions.saveKt1307Success),
      map(() => Kt1307Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1307Service
  ) {}
}
