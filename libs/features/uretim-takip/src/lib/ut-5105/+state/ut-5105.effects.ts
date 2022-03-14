import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Ut5105Service } from '../services/ut-5105.service';
import * as Ut5105Actions from './ut-5105.actions';

@Injectable()
export class Ut5105Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5105Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Ut5105Actions.loadUt5105Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut5105Actions.loadUt5105Failure({ error }))
          )
        )
      )
    )
  );
  log$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5105Actions.loadUt5105Log),
      switchMap(action =>
        this.service.getDataPasif(action.utTankDurulama).pipe(
          map(({ data }) => Ut5105Actions.loadUt5105LogSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Ut5105Actions.loadUt5105Failure({ error }))
          )
        )
      )
    )
  );
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5105Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.utTankDurulama).pipe(
          map(({ data, code }) =>
            Ut5105Actions.saveUt5105Success({
              utTankDurulama: data,
              code: String(code),
            })
          ),
          catchError(({ error }) =>
            observableOf(Ut5105Actions.saveUt5105Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5105Actions.saveUt5105Success),
      map(() => Ut5105Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Ut5105Service
  ) {}
}
