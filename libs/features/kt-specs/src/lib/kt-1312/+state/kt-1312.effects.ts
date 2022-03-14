import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1312Service } from '../services/kt-1312.service';
import * as Kt1312Actions from './kt-1312.actions';

@Injectable()
export class Kt1312Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1312Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1312Actions.loadKt1312Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1312Actions.loadKt1312Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1312Actions.loadKt1312Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1312Actions.loadKt1312UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1312Actions.loadKt1312UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1312Actions.loadKt1312Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1312Actions.loadKt1312CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1312Actions.loadKt1312CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1312Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpIiTenekeKalayKimyasal).pipe(
          map(({ data }) => Kt1312Actions.saveKt1312Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1312Actions.saveKt1312Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1312Actions.saveKt1312Success),
      map(() => Kt1312Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1312Service
  ) {}
}
