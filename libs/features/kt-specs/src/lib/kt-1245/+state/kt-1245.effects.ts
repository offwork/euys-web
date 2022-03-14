import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {of as  observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1245Service } from '../services/kt-1245.service';
import * as Kt1245Actions from './kt-1245.actions';

@Injectable()
export class Kt1245Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1245Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1245Actions.loadKt1245Success({ data })),
          catchError(({ error }) => observableOf(Kt1245Actions.loadKt1245Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1245Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtNormalize).pipe(
          map(({ data }) => Kt1245Actions.saveKt1245Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1245Actions.saveKt1245Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1245Actions.saveKt1245Success),
      map(() => Kt1245Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1245Service) {}
}
