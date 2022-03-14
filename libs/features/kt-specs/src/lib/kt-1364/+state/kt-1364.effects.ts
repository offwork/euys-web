import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1364Service } from '../services/kt-1364.service';
import * as Kt1364Actions from './kt-1364.actions';

@Injectable()
export class Kt1364Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1364Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1364Actions.loadKt1364Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1364Actions.loadKt1364Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1364Actions.loadKt1364Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1364Actions.loadKt1364UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1364Actions.loadKt1364UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1364Actions.loadKt1364Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1364Actions.loadKt1364CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1364Actions.loadKt1364CeliklerFailure({ error }))
          )
        )
      )
    )
  );
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1364Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpDurulama).pipe(
          map(({ data }) => Kt1364Actions.saveKt1364Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1364Actions.saveKt1364Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1364Actions.saveKt1364Success),
      map(() => Kt1364Actions.init())
    )
  );
  constructor(
    private readonly actions$: Actions,
    private service: Kt1364Service
  ) {}
}
