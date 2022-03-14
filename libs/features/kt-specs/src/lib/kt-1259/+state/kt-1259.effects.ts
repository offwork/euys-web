import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Kt1259Service } from '../services/kt-1259.service';
import * as Kt1259Actions from './kt-1259.actions';

@Injectable()
export class Kt1259Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1259Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1259Actions.loadKt1259Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1259Actions.loadKt1259Failure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1259Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktAtYansitmaTesti).pipe(
          map(({ data }) => Kt1259Actions.saveKt1259Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1259Actions.saveKt1259Failure({ error }))
          )
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1259Actions.saveKt1259Success),
      map(() => Kt1259Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1259Service
  ) {}
}
