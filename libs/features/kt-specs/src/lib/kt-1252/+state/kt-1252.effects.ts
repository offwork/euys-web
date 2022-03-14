import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1252Service } from '../services/kt-1252.service';
import * as Kt1252Actions from './kt-1252.actions';

@Injectable()
export class Kt1252Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1252Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1252Actions.loadKt1252Success({ data })),
          catchError(({ error }) => observableOf(Kt1252Actions.loadKt1252Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1252Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtTcalSogutmaYaslandirma).pipe(
          map(({ data }) => Kt1252Actions.saveKt1252Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1252Actions.saveKt1252Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1252Actions.saveKt1252Success),
      map(() => Kt1252Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1252Service) {}
}
