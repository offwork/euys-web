import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { Kt1339Service } from '../services/kt-1339.service';
import * as Kt1339Actions from './kt-1339.actions';

@Injectable()
export class Kt1339Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1339Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1339Actions.loadKt1339Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1339Actions.loadKt1339Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1339Actions.loadKt1339Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1339Actions.loadKt1339UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1339Actions.loadKt1339UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1339Actions.loadKt1339Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1339Actions.loadKt1339CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1339Actions.loadKt1339CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1339Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpKromKaplamaTfsCro3).pipe(
          map(({ data }) => Kt1339Actions.saveKt1339Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1339Actions.saveKt1339Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1339Actions.saveKt1339Success),
      map(() => Kt1339Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1339Service
  ) {}
}
