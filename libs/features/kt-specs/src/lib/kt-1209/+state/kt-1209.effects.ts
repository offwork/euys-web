import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1209Service } from '../services/kt-1209.service';
import * as Kt1209Actions from './kt-1209.actions';

@Injectable()
export class Kt1209Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1209Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1209Actions.loadKt1209Success({ data })),
          catchError(({ error }) => observableOf(Kt1209Actions.loadKt1209Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1209Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAt1AsitlemeTlv).pipe(
          map(({ data }) => Kt1209Actions.saveKt1209Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1209Actions.saveKt1209Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1209Actions.saveKt1209Success),
      map(() => Kt1209Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1209Service) {}
}
