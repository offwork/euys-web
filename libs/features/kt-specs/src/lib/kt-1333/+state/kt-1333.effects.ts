import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { Kt1333Service } from '../services/kt-1333.service';
import * as Kt1333Actions from './kt-1333.actions';

@Injectable()
export class Kt1333Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1333Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1333Actions.loadKt1333Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1333Actions.loadKt1333Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1333Actions.loadKt1333Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1333Actions.loadKt1333UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1333Actions.loadKt1333UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1333Actions.loadKt1333Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1333Actions.loadKt1333CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1333Actions.loadKt1333CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1333Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpIiTenekeKalayKaplama).pipe(
          map(({ data }) => Kt1333Actions.saveKt1333Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1333Actions.saveKt1333Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1333Actions.saveKt1333Success),
      map(() => Kt1333Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1333Service
  ) {}
}
