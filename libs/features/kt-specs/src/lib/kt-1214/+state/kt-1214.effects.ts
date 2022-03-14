import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1214Service } from '../services/kt-1214.service';
import * as Kt1214Actions from './kt-1214.actions';

@Injectable()
export class Kt1214Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1214Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1214Actions.loadKt1214Success({ data })),
          catchError(({ error }) => observableOf(Kt1214Actions.loadKt1214Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1214Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtBobinDilUcu).pipe(
          map(({ data }) => Kt1214Actions.saveKt1214Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1214Actions.saveKt1214Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1214Actions.saveKt1214Success),
      map(() => Kt1214Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1214Service) {}
}
