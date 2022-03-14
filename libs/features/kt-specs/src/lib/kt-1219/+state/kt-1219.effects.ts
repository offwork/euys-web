import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1219Service } from '../services/kt-1219.service';
import * as Kt1219Actions from './kt-1219.actions';

@Injectable()
export class Kt1219Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1219Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1219Actions.loadKt1219Success({ data })),
          catchError(({ error }) => observableOf(Kt1219Actions.loadKt1219Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1219Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktCgl12Tavlama1).pipe(
          map(({ data }) => Kt1219Actions.saveKt1219Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1219Actions.saveKt1219Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1219Actions.saveKt1219Success),
      map(() => Kt1219Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1219Service) {}
}
