import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1243Service } from '../services/kt-1243.service';
import * as Kt1243Actions from './kt-1243.actions';

@Injectable()
export class Kt1243Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1243Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1243Actions.loadKt1243Success({ data })),
          catchError(({ error }) => observableOf(Kt1243Actions.loadKt1243Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1243Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtLevhaHadIkmalSicaklik).pipe(
          map(({ data }) => Kt1243Actions.saveKt1243Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1243Actions.saveKt1243Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1243Actions.saveKt1243Success),
      map(() => Kt1243Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1243Service) {}
}
