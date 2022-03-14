import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1360Service } from '../services/kt-1360.service';
import * as Kt1360Actions from './kt-1360.actions';

@Injectable()
export class Kt1360Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1360Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1360Actions.loadKt1360Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1360Actions.loadKt1360Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1360Actions.loadKt1360Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1360Actions.loadKt1360UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1360Actions.loadKt1360UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1360Actions.loadKt1360Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1360Actions.loadKt1360CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1360Actions.loadKt1360CeliklerFailure({ error }))
          )
        )
      )
    )
  );
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1360Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpYansitmaTesti).pipe(
          map(({ data }) => Kt1360Actions.saveKt1360Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1360Actions.saveKt1360Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1360Actions.saveKt1360Success),
      map(() => Kt1360Actions.init())
    )
  );
  constructor(
    private readonly actions$: Actions,
    private service: Kt1360Service
  ) {}
}
