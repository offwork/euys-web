import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1318Service } from '../services/kt-1318.service';
import * as Kt1318Actions from './kt-1318.actions';

@Injectable()
export class Kt1318Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1318Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1318Actions.loadKt1318Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1318Actions.loadKt1318Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1318Actions.loadKt1318Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1318Actions.loadKt1318UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1318Actions.loadKt1318UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1318Actions.loadKt1318Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1318Actions.loadKt1318CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1318Actions.loadKt1318CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1318Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpCgl12HavaSogutmaAjc).pipe(
          map(({ data }) => Kt1318Actions.saveKt1318Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1318Actions.saveKt1318Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1318Actions.saveKt1318Success),
      map(() => Kt1318Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1318Service
  ) {}
}
