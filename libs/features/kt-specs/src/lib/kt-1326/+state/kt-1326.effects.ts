import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { Kt1326Service } from '../services/kt-1326.service';
import * as Kt1326Actions from './kt-1326.actions';

@Injectable()
export class Kt1326Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1326Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1326Actions.loadKt1326Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1326Actions.loadKt1326Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1326Actions.loadKt1326Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1326Actions.loadKt1326UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1326Actions.loadKt1326UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1326Actions.loadKt1326Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1326Actions.loadKt1326CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1326Actions.loadKt1326CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1326Actions.save),
      switchMap(action =>
        this.service
          .saveOrUpdate(action.ktSpEnineKalinlikVeIkiKenarFarklari)
          .pipe(
            map(({ data }) =>
              Kt1326Actions.saveKt1326Success({ record: data })
            ),
            catchError(({ error }) =>
              observableOf(Kt1326Actions.saveKt1326Failure({ error }))
            )
          )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1326Actions.saveKt1326Success),
      map(() => Kt1326Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1326Service
  ) {}
}
