import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Pfdm3103Service } from '../services/pfdm-3103.service';
import * as Pfdm3103Actions from './pfdm-3103.actions';

@Injectable()
export class Pfdm3103Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Pfdm3103Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Pfdm3103Actions.loadPfdm3103Success({ data })),
          catchError(({ error }) =>
            observableOf(Pfdm3103Actions.loadPfdm3103Failure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Pfdm3103Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.pfdmYuzeyKaplama).pipe(
          map(({ data }) =>
            Pfdm3103Actions.savePfdm3103Success({ record: data })
          ),
          catchError(({ error }) =>
            observableOf(Pfdm3103Actions.savePfdm3103Failure({ error }))
          )
        )
      )
    )
  );
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Pfdm3103Actions.deletePfdm),
      switchMap(action =>
        this.service.delete(action.pfdmYuzeyKaplama).pipe(
          map(({ data }) =>
            Pfdm3103Actions.deletePfdm3103Success({ record: data })
          ),
          catchError(({ error }) =>
            observableOf(Pfdm3103Actions.deletePfdm3103Failure({ error }))
          )
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        Pfdm3103Actions.savePfdm3103Success,
        Pfdm3103Actions.deletePfdm3103Success
      ),
      map(() => Pfdm3103Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Pfdm3103Service
  ) {}
}
