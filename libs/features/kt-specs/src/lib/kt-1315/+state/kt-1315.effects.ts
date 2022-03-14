import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1315Service } from '../services/kt-1315.service';
import * as Kt1315Actions from './kt-1315.actions';

@Injectable()
export class Kt1315Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1315Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1315Actions.loadKt1315Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1315Actions.loadKt1315Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1315Actions.loadKt1315Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1315Actions.loadKt1315UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1315Actions.loadKt1315UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1315Actions.loadKt1315Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1315Actions.loadKt1315CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1315Actions.loadKt1315CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1315Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpBobHazTempYuzdeUzama).pipe(
          map(({ data }) => Kt1315Actions.saveKt1315Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1315Actions.saveKt1315Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1315Actions.saveKt1315Success),
      map(() => Kt1315Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1315Service
  ) {}
}
