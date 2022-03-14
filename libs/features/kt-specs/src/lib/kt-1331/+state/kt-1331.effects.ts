import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1331Service } from '../services/kt-1331.service';
import * as Kt1331Actions from './kt-1331.actions';

@Injectable()
export class Kt1331Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1331Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1331Actions.loadKt1331Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1331Actions.loadKt1331Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1331Actions.loadKt1331Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1331Actions.loadKt1331UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1331Actions.loadKt1331UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1331Actions.loadKt1331Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1331Actions.loadKt1331CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1331Actions.loadKt1331CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1331Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpIiTenekeKalayErgitme).pipe(
          map(({ data }) => Kt1331Actions.saveKt1331Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1331Actions.saveKt1331Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1331Actions.saveKt1331Success),
      map(() => Kt1331Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1331Service
  ) {}
}
