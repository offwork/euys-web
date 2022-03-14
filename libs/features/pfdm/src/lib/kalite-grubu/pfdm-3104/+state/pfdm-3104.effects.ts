import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Pfdm3104Service } from '../services/pfdm-3104.service';
import * as Pfdm3104Actions from './pfdm-3104.actions';

@Injectable()
export class Pfdm3104Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Pfdm3104Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Pfdm3104Actions.loadPfdm3104Success({ data })),
          catchError(({ error }) =>
            observableOf(Pfdm3104Actions.loadPfdm3104Failure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Pfdm3104Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.pfdmKaliteGrup).pipe(
          map(({ data }) =>
            Pfdm3104Actions.savePfdm3104Success({ record: data })
          ),
          catchError(({ error }) =>
            observableOf(Pfdm3104Actions.savePfdm3104Failure({ error }))
          )
        )
      )
    )
  );
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Pfdm3104Actions.deletePfdm),
      switchMap(action =>
        this.service.delete(action.pfdmKaliteGrup).pipe(
          map(({ data }) =>
            Pfdm3104Actions.deletePfdm3104Success({ record: data })
          ),
          catchError(({ error }) =>
            observableOf(Pfdm3104Actions.deletePfdm3104Failure({ error }))
          )
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        Pfdm3104Actions.savePfdm3104Success,
        Pfdm3104Actions.deletePfdm3104Success
      ),
      map(() => Pfdm3104Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Pfdm3104Service
  ) {}
}
