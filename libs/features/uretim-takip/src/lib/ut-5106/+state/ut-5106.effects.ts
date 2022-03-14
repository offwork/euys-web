import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Ut5106Service } from '../services/ut-5106.service';
import * as Ut5106Actions from './ut-5106.actions';

@Injectable()
export class Ut5106Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5106Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Ut5106Actions.loadUt5106Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut5106Actions.loadUt5106Failure({ error }))
          )
        )
      )
    )
  );
  log$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5106Actions.loadUt5106Log),
      switchMap(action =>
        this.service.getDataPasif(action.utAsitlemeRejenerasyon).pipe(
          map(({ data }) => Ut5106Actions.loadUt5106LogSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Ut5106Actions.loadUt5106Failure({ error }))
          )
        )
      )
    )
  );
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5106Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.utAsitlemeRejenerasyon).pipe(
          map(({ data, code }) =>
            Ut5106Actions.saveUt5106Success({
              utAsitlemeRejenerasyon: data,
              code: String(code),
            })
          ),
          catchError(({ error }) =>
            observableOf(Ut5106Actions.saveUt5106Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5106Actions.saveUt5106Success),
      map(() => Ut5106Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Ut5106Service
  ) {}
}
