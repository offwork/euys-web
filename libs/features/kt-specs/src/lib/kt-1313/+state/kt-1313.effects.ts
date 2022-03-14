import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1313Service } from '../services/kt-1313.service';
import * as Kt1313Actions from './kt-1313.actions';

@Injectable()
export class Kt1313Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1313Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1313Actions.loadKt1313Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1313Actions.loadKt1313Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1313Actions.loadKt1313Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1313Actions.loadKt1313UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1313Actions.loadKt1313UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1313Actions.loadKt1313Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1313Actions.loadKt1313CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1313Actions.loadKt1313CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1313Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpBobinBalikKuyrugu).pipe(
          map(({ data }) => Kt1313Actions.saveKt1313Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1313Actions.saveKt1313Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1313Actions.saveKt1313Success),
      map(() => Kt1313Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1313Service
  ) {}
}
