import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1314Service } from '../services/kt-1314.service';
import * as Kt1314Actions from './kt-1314.actions';

@Injectable()
export class Kt1314Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1314Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1314Actions.loadKt1314Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1314Actions.loadKt1314Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1314Actions.loadKt1314Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1314Actions.loadKt1314UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1314Actions.loadKt1314UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1314Actions.loadKt1314Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1314Actions.loadKt1314CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1314Actions.loadKt1314CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1314Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpBobinDilUcu).pipe(
          map(({ data }) => Kt1314Actions.saveKt1314Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1314Actions.saveKt1314Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1314Actions.saveKt1314Success),
      map(() => Kt1314Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1314Service
  ) {}
}
