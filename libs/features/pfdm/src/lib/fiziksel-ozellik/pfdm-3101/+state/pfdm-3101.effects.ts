import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Pfdm3101Service } from '../services/pfdm-3101.service';
import * as Pfdm3101Actions from './pfdm-3101.actions';

@Injectable()
export class Pfdm3101Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Pfdm3101Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Pfdm3101Actions.loadPfdm3101Success({ data })),
          catchError(({ error }) =>
            observableOf(Pfdm3101Actions.loadPfdm3101Failure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Pfdm3101Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.pfdmKalinlikCap).pipe(
          map(({ data }) =>
            Pfdm3101Actions.savePfdm3101Success({ record: data })
          ),
          catchError(({ error }) =>
            observableOf(Pfdm3101Actions.savePfdm3101Failure({ error }))
          )
        )
      )
    )
  );
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Pfdm3101Actions.deletePfdm),
      switchMap(action =>
        this.service.delete(action.pfdmKalinlikCap).pipe(
          map(({ data }) =>
            Pfdm3101Actions.deletePfdm3101Success({ record: data })
          ),
          catchError(({ error }) =>
            observableOf(Pfdm3101Actions.deletePfdm3101Failure({ error }))
          )
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        Pfdm3101Actions.savePfdm3101Success,
        Pfdm3101Actions.deletePfdm3101Success
      ),
      map(() => Pfdm3101Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Pfdm3101Service
  ) {}
}
