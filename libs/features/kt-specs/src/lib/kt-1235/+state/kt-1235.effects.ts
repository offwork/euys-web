import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1235Service } from '../services/kt-1235.service';
import * as Kt1235Actions from './kt-1235.actions';

@Injectable()
export class Kt1235Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1235Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1235Actions.loadKt1235Success({ data })),
          catchError(({ error }) => observableOf(Kt1235Actions.loadKt1235Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1235Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtIcCapDisCapTolerans).pipe(
          map(({ data }) => Kt1235Actions.saveKt1235Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1235Actions.saveKt1235Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1235Actions.saveKt1235Success),
      map(() => Kt1235Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1235Service) {}
}
