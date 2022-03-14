import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Ut5108Service } from '../services/ut-5108.service';
import * as Ut5108Actions from './ut-5108.actions';

@Injectable()
export class Ut5108Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5108Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Ut5108Actions.loadUt5108Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut5108Actions.loadUt5108Failure({ error }))
          )
        )
      )
    )
  );
  log$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5108Actions.loadUt5108Log),
      switchMap(action =>
        this.service.getDataPasif(action.utIsletmeHaddeYagEmulsiyon).pipe(
          map(({ data }) => Ut5108Actions.loadUt5108LogSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Ut5108Actions.loadUt5108Failure({ error }))
          )
        )
      )
    )
  );
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5108Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.utIsletmeHaddeYagEmulsiyon).pipe(
          map(({ data, code }) =>
            Ut5108Actions.saveUt5108Success({
              utIsletmeHaddeYagEmulsiyon: data,
              code: String(code),
            })
          ),
          catchError(({ error }) =>
            observableOf(Ut5108Actions.saveUt5108Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5108Actions.saveUt5108Success),
      map(() => Ut5108Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Ut5108Service
  ) {}
}
