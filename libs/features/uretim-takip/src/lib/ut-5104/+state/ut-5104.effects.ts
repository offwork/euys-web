import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Ut5104Service } from '../services/ut-5104.service';
import * as Ut5104Actions from './ut-5104.actions';

@Injectable()
export class Ut5104Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5104Actions.getData),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Ut5104Actions.loadUt5104Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut5104Actions.loadUt5104Failure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5104Actions.save),
      switchMap(action =>
        this.service.save(action.utTankDurulamaLimit).pipe(
          map(({ data, code }) =>
            Ut5104Actions.saveUt5104Success({
              utTankDurulamaLimit: data,
              code: String(code),
            })
          ),
          catchError(({ error }) =>
            observableOf(Ut5104Actions.saveUt5104Failure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Ut5104Service
  ) {}
}
