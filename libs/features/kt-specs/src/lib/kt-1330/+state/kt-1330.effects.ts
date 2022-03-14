import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1330Service } from '../services/kt-1330.service';
import * as Kt1330Actions from './kt-1330.actions';

@Injectable()
export class Kt1330Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1330Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1330Actions.loadKt1330Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1330Actions.loadKt1330Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1330Actions.loadKt1330Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1330Actions.loadKt1330UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1330Actions.loadKt1330UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1330Actions.loadKt1330Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1330Actions.loadKt1330CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1330Actions.loadKt1330CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1330Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpIiTenekeAsitleme).pipe(
          map(({ data }) => Kt1330Actions.saveKt1330Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1330Actions.saveKt1330Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1330Actions.saveKt1330Success),
      map(() => Kt1330Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1330Service
  ) {}
}
