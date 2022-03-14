import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Ut5103Service } from '../services/ut-5103.service';
import * as Ut5103Actions from './ut-5103.actions';

@Injectable()
export class Ut5103Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5103Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Ut5103Actions.loadUt5103Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut5103Actions.loadUt5103Failure({ error }))
          )
        )
      )
    )
  );
  log$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5103Actions.loadUt5103Log),
      switchMap(action =>
        this.service.getDataPasif(action.utTankAsitleme).pipe(
          map(({ data }) => Ut5103Actions.loadUt5103LogSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Ut5103Actions.loadUt5103Failure({ error }))
          )
        )
      )
    )
  );
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5103Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.utTankAsitleme).pipe(
          map(({ data, code }) =>
            Ut5103Actions.saveUt5103Success({
              utTankAsitleme: data,
              code: String(code),
            })
          ),
          catchError(({ error }) =>
            observableOf(Ut5103Actions.saveUt5103Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5103Actions.saveUt5103Success),
      map(() => Ut5103Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Ut5103Service
  ) {}
}
