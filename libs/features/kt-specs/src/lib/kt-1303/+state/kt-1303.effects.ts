import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1303Service } from '../services/kt-1303.service';
import * as Kt1303Actions from './kt-1303.actions';

@Injectable()
export class Kt1303Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1303Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1303Actions.loadKt1303Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1303Actions.loadKt1303Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1303Actions.loadKt1303Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1303Actions.loadKt1303UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1303Actions.loadKt1303UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1303Actions.loadKt1303Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1303Actions.loadKt1303CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1303Actions.loadKt1303CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1303Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSp2SckHadIkmalSicaklik).pipe(
          map(({ data }) => Kt1303Actions.saveKt1303Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1303Actions.saveKt1303Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1303Actions.saveKt1303Success),
      map(() => Kt1303Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1303Service
  ) {}
}
