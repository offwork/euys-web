import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1253Service } from '../services/kt-1253.service';
import * as Kt1253Actions from './kt-1253.actions';

@Injectable()
export class Kt1253Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1253Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1253Actions.loadKt1253Success({ data })),
          catchError(({ error }) => observableOf(Kt1253Actions.loadKt1253Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1253Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtTincalHattiTavlama).pipe(
          map(({ data }) => Kt1253Actions.saveKt1253Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1253Actions.saveKt1253Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1253Actions.saveKt1253Success),
      map(() => Kt1253Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1253Service) {}
}
