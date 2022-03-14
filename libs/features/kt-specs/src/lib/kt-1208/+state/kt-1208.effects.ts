import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1208Service } from '../services/kt-1208.service';
import * as Kt1208Actions from './kt-1208.actions';

@Injectable()
export class Kt1208Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1208Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1208Actions.loadKt1208Success({ data })),
          catchError(({ error }) => observableOf(Kt1208Actions.loadKt1208Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1208Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAt1AsitlemeTank).pipe(
          map(({ data }) => Kt1208Actions.saveKt1208Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1208Actions.saveKt1208Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1208Actions.saveKt1208Success),
      map(() => Kt1208Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1208Service) {}
}
