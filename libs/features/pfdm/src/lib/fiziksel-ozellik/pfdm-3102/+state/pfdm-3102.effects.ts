import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Pfdm3102Service } from '../services/pfdm-3102.service';
import * as Pfdm3102Actions from './pfdm-3102.actions';

@Injectable()
export class Pfdm3102Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Pfdm3102Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Pfdm3102Actions.loadPfdm3102Success({ data })),
          catchError(({ error }) =>
            observableOf(Pfdm3102Actions.loadPfdm3102Failure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Pfdm3102Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.pfdmGenislikAraligi).pipe(
          map(({ data }) =>
            Pfdm3102Actions.savePfdm3102Success({ record: data })
          ),
          catchError(({ error }) =>
            observableOf(Pfdm3102Actions.savePfdm3102Failure({ error }))
          )
        )
      )
    )
  );
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Pfdm3102Actions.deletePfdm),
      switchMap(action =>
        this.service.delete(action.pfdmGenislikAraligi).pipe(
          map(({ data }) =>
            Pfdm3102Actions.deletePfdm3102Success({ record: data })
          ),
          catchError(({ error }) =>
            observableOf(Pfdm3102Actions.deletePfdm3102Failure({ error }))
          )
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        Pfdm3102Actions.savePfdm3102Success,
        Pfdm3102Actions.deletePfdm3102Success
      ),
      map(() => Pfdm3102Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Pfdm3102Service
  ) {}
}
