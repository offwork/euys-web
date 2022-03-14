import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1321Service } from '../services/kt-1321.service';
import * as Kt1321Actions from './kt-1321.actions';

@Injectable()
export class Kt1321Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1321Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1321Actions.loadKt1321Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1321Actions.loadKt1321Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1321Actions.loadKt1321Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1321Actions.loadKt1321UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1321Actions.loadKt1321UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1321Actions.loadKt1321Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1321Actions.loadKt1321CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1321Actions.loadKt1321CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1321Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpCgl12Temizleme).pipe(
          map(({ data }) => Kt1321Actions.saveKt1321Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1321Actions.saveKt1321Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1321Actions.saveKt1321Success),
      map(() => Kt1321Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1321Service
  ) {}
}
