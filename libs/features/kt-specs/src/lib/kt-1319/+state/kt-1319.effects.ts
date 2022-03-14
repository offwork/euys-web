import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1319Service } from '../services/kt-1319.service';
import * as Kt1319Actions from './kt-1319.actions';

@Injectable()
export class Kt1319Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1319Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1319Actions.loadKt1319Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1319Actions.loadKt1319Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1319Actions.loadKt1319Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1319Actions.loadKt1319UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1319Actions.loadKt1319UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1319Actions.loadKt1319Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1319Actions.loadKt1319CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1319Actions.loadKt1319CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1319Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpCgl12Tavlama1).pipe(
          map(({ data }) => Kt1319Actions.saveKt1319Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1319Actions.saveKt1319Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1319Actions.saveKt1319Success),
      map(() => Kt1319Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1319Service
  ) {}
}
