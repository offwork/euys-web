import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Ut5107Service } from '../services/ut-5107.service';
import * as Ut5107Actions from './ut-5107.actions';

@Injectable()
export class Ut5107Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5107Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Ut5107Actions.loadUt5107Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut5107Actions.loadUt5107Failure({ error }))
          )
        )
      )
    )
  );
  log$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5107Actions.loadUt5107Log),
      switchMap(action =>
        this.service.getDataPasif(action.utIsletmeHaddeYagEmulsiyon).pipe(
          map(({ data }) => Ut5107Actions.loadUt5107LogSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Ut5107Actions.loadUt5107Failure({ error }))
          )
        )
      )
    )
  );
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5107Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.utIsletmeHaddeYagEmulsiyon).pipe(
          map(({ data, code }) =>
            Ut5107Actions.saveUt5107Success({
              utIsletmeHaddeYagEmulsiyon: data,
              code: String(code),
            })
          ),
          catchError(({ error }) =>
            observableOf(Ut5107Actions.saveUt5107Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5107Actions.saveUt5107Success),
      map(() => Ut5107Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Ut5107Service
  ) {}
}
