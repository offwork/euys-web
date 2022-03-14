import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1301Service } from '../services/kt-1301.service';
import * as Kt1301Actions from './kt-1301.actions';

@Injectable()
export class Kt1301Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1301Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1301Actions.loadKt1301Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1301Actions.loadKt1301Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1301Actions.loadKt1301Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1301Actions.loadKt1301UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1301Actions.loadKt1301UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1301Actions.loadKt1301Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1301Actions.loadKt1301CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1301Actions.loadKt1301CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1301Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSp1SckHadIkmalSicaklik).pipe(
          map(({ data }) => Kt1301Actions.saveKt1301Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1301Actions.saveKt1301Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1301Actions.saveKt1301Success),
      map(() => Kt1301Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1301Service
  ) {}
}
