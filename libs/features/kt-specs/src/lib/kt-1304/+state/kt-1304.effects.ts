import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1304Service } from '../services/kt-1304.service';
import * as Kt1304Actions from './kt-1304.actions';

@Injectable()
export class Kt1304Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1304Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1304Actions.loadKt1304Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1304Actions.loadKt1304Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1304Actions.loadKt1304Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1304Actions.loadKt1304UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1304Actions.loadKt1304UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1304Actions.loadKt1304Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1304Actions.loadKt1304CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1304Actions.loadKt1304CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1304Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSp2SckHadSarilmaSicakl).pipe(
          map(({ data }) => Kt1304Actions.saveKt1304Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1304Actions.saveKt1304Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1304Actions.saveKt1304Success),
      map(() => Kt1304Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1304Service
  ) {}
}
