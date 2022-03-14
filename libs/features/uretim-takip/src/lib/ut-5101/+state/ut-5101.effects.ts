import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Ut5101Service } from '../services/ut-5101.service';
import * as Ut5101Actions from './ut-5101.actions';

@Injectable()
export class Ut5101Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5101Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Ut5101Actions.loadUt5101Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut5101Actions.loadUt5101Failure({ error }))
          )
        )
      )
    )
  );

  log$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5101Actions.loadUt5101Log),
      switchMap(action =>
        this.service.getDataPasif(action.utCinkoLapa).pipe(
          map(({ data }) => Ut5101Actions.loadUt5101LogSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Ut5101Actions.loadUt5101Failure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5101Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.utCinkoLapa).pipe(
          map(({ data, code }) =>
            Ut5101Actions.saveUt5101Success({
              utCinkoLapa: data,
              code: String(code),
            })
          ),
          catchError(({ error }) =>
            observableOf(Ut5101Actions.saveUt5101Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5101Actions.saveUt5101Success),
      map(() => Ut5101Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Ut5101Service
  ) {}
}
