import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1341Service } from '../services/kt-1341.service';
import * as Kt1341Actions from './kt-1341.actions';

@Injectable()
export class Kt1341Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1341Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1341Actions.loadKt1341Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1341Actions.loadKt1341Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1341Actions.loadKt1341Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1341Actions.loadKt1341UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1341Actions.loadKt1341UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1341Actions.loadKt1341Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1341Actions.loadKt1341CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1341Actions.loadKt1341CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1341Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpKromKaplamaTfsFlor).pipe(
          map(({ data }) => Kt1341Actions.saveKt1341Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1341Actions.saveKt1341Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1341Actions.saveKt1341Success),
      map(() => Kt1341Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1341Service
  ) {}
}
