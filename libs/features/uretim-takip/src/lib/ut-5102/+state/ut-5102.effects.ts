import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Ut5102Service } from '../services/ut-5102.service';
import * as Ut5102Actions from './ut-5102.actions';

@Injectable()
export class Ut5102Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5102Actions.getData),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Ut5102Actions.loadUt5102Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut5102Actions.loadUt5102Failure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5102Actions.save),
      switchMap(action =>
        this.service.save(action.utTankAsitlemeLimit).pipe(
          map(({ data, code }) =>
            Ut5102Actions.saveUt5102Success({
              utTankAsitlemeLimit: data,
              code: String(code),
            })
          ),
          catchError(({ error }) =>
            observableOf(Ut5102Actions.saveUt5102Failure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Ut5102Service
  ) {}
}
