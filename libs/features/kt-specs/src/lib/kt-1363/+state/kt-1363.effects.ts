import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1363Service } from '../services/kt-1363.service';
import * as Kt1363Actions from './kt-1363.actions';

@Injectable()
export class Kt1363Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1363Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1363Actions.loadKt1363Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1363Actions.loadKt1363Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1363Actions.loadKt1363Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1363Actions.loadKt1363UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1363Actions.loadKt1363UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1363Actions.loadKt1363Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1363Actions.loadKt1363CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1363Actions.loadKt1363CeliklerFailure({ error }))
          )
        )
      )
    )
  );
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1363Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpAsitlemeTlv).pipe(
          map(({ data }) => Kt1363Actions.saveKt1363Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1363Actions.saveKt1363Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1363Actions.saveKt1363Success),
      map(() => Kt1363Actions.init())
    )
  );
  constructor(
    private readonly actions$: Actions,
    private service: Kt1363Service
  ) {}
}
