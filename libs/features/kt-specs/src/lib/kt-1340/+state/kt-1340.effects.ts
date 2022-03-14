import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1340Service } from '../services/kt-1340.service';
import * as Kt1340Actions from './kt-1340.actions';

@Injectable()
export class Kt1340Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1340Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1340Actions.loadKt1340Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1340Actions.loadKt1340Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1340Actions.loadKt1340Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1340Actions.loadKt1340UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1340Actions.loadKt1340UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1340Actions.loadKt1340Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1340Actions.loadKt1340CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1340Actions.loadKt1340CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1340Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpKromKaplamaTfsDragout).pipe(
          map(({ data }) => Kt1340Actions.saveKt1340Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1340Actions.saveKt1340Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1340Actions.saveKt1340Success),
      map(() => Kt1340Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1340Service
  ) {}
}
