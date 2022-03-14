import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1255Service } from '../services/kt-1255.service';
import * as Kt1255Actions from './kt-1255.actions';

@Injectable()
export class Kt1255Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1255Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1255Actions.loadKt1255Success({ data })),
          catchError(({ error }) => observableOf(Kt1255Actions.loadKt1255Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1255Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtTincalTempYuzdeUzama).pipe(
          map(({ data }) => Kt1255Actions.saveKt1255Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1255Actions.saveKt1255Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1255Actions.saveKt1255Success),
      map(() => Kt1255Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1255Service) {}
}
