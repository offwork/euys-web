import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1362Service } from '../services/kt-1362.service';
import * as Kt1362Actions from './kt-1362.actions';

@Injectable()
export class Kt1362Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1362Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1362Actions.loadKt1362Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1362Actions.loadKt1362Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1362Actions.loadKt1362Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1362Actions.loadKt1362UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1362Actions.loadKt1362UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1362Actions.loadKt1362Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1362Actions.loadKt1362CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1362Actions.loadKt1362CeliklerFailure({ error }))
          )
        )
      )
    )
  );
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1362Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpAsitlemeTank).pipe(
          map(({ data }) => Kt1362Actions.saveKt1362Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1362Actions.saveKt1362Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1362Actions.saveKt1362Success),
      map(() => Kt1362Actions.init())
    )
  );
  constructor(
    private readonly actions$: Actions,
    private service: Kt1362Service
  ) {}
}
