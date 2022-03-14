import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3002Service } from '../services/up-3002.service';
import * as actions from './up-3002.actions';

@Injectable()
export class Up3002Effects {
  loadPlanliDuruslar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadPlanliDuruslar),
      switchMap(({ id }) =>
        this.service.getPlanliDuruslar(id).pipe(
          map(({ data }) =>
            actions.loadPlanliDuruslarSuccess({ planliDuruslar: data })
          ),
          catchError(error =>
            observableOf(actions.loadPlanliDuruslarFailure({ error }))
          )
        )
      )
    )
  );

  loadUretimHedefleri$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadUretimHedefleri),
      switchMap(({ id }) =>
        this.service.getUretimHedefleri(id).pipe(
          map(({ data }) =>
            actions.loadUretimHedefleriSuccess({ uretimHedefleri: data })
          ),
          catchError(error =>
            observableOf(actions.loadUretimHedefleriFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3002Service
  ) {}
}
