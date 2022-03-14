import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { Kt1325Service } from '../services/kt-1325.service';
import * as Kt1325Actions from './kt-1325.actions';

@Injectable()
export class Kt1325Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1325Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1325Actions.loadKt1325Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1325Actions.loadKt1325Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1325Actions.loadKt1325Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1325Actions.loadKt1325UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1325Actions.loadKt1325UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1325Actions.loadKt1325Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1325Actions.loadKt1325CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1325Actions.loadKt1325CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1325Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSp2SckHadIkmalSicaklik).pipe(
          map(({ data }) => Kt1325Actions.saveKt1325Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1325Actions.saveKt1325Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1325Actions.saveKt1325Success),
      map(() => Kt1325Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1325Service
  ) {}
}
