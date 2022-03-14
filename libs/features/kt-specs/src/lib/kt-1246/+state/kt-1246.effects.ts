import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1246Service } from '../services/kt-1246.service';
import * as Kt1246Actions from './kt-1246.actions';

@Injectable()
export class Kt1246Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1246Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1246Actions.loadKt1246Success({ data })),
          catchError(({ error }) => observableOf(Kt1246Actions.loadKt1246Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1246Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtOzelAgirlik).pipe(
          map(({ data }) => Kt1246Actions.saveKt1246Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1246Actions.saveKt1246Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1246Actions.saveKt1246Success),
      map(() => Kt1246Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1246Service) {}
}
