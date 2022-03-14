import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1261Service } from '../services/kt-1261.service';
import * as Kt1261Actions from './kt-1261.actions';

@Injectable()
export class Kt1261Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1261Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1261Actions.loadKt1261Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1261Actions.loadKt1261Failure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1261Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktAtYuzeyDuzgunluguIUnit).pipe(
          map(({ data }) => Kt1261Actions.saveKt1261Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1261Actions.saveKt1261Failure({ error }))
          )
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1261Actions.saveKt1261Success),
      map(() => Kt1261Actions.init())
    )
  );
  constructor(
    private readonly actions$: Actions,
    private service: Kt1261Service
  ) {}
}
