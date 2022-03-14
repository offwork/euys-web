import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1260Service } from '../services/kt-1260.service';
import * as Kt1260Actions from './kt-1260.actions';

@Injectable()
export class Kt1260Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1260Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1260Actions.loadKt1260Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1260Actions.loadKt1260Failure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1260Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktAtTemperMerdaneTipi).pipe(
          map(({ data }) => Kt1260Actions.saveKt1260Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1260Actions.saveKt1260Failure({ error }))
          )
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1260Actions.saveKt1260Success),
      map(() => Kt1260Actions.init())
    )
  );
  constructor(
    private readonly actions$: Actions,
    private service: Kt1260Service
  ) {}
}
