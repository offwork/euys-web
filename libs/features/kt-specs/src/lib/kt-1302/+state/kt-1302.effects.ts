import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1302Service } from '../services/kt-1302.service';
import * as Kt1302Actions from './kt-1302.actions';

@Injectable()
export class Kt1302Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1302Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1302Actions.loadKt1302Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1302Actions.loadKt1302Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1302Actions.loadKt1302Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1302Actions.loadKt1302UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1302Actions.loadKt1302UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1302Actions.loadKt1302Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1302Actions.loadKt1302CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1302Actions.loadKt1302CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1302Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSp1SckHadSarilmaSicakl).pipe(
          map(({ data }) => Kt1302Actions.saveKt1302Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1302Actions.saveKt1302Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1302Actions.saveKt1302Success),
      map(() => Kt1302Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1302Service
  ) {}
}
