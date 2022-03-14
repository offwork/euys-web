import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1320Service } from '../services/kt-1320.service';
import * as Kt1320Actions from './kt-1320.actions';

@Injectable()
export class Kt1320Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1320Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1320Actions.loadKt1320Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1320Actions.loadKt1320Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1320Actions.loadKt1320Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1320Actions.loadKt1320UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1320Actions.loadKt1320UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1320Actions.loadKt1320Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1320Actions.loadKt1320CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1320Actions.loadKt1320CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1320Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpCgl12Tavlama2).pipe(
          map(({ data }) => Kt1320Actions.saveKt1320Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1320Actions.saveKt1320Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1320Actions.saveKt1320Success),
      map(() => Kt1320Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1320Service
  ) {}
}
