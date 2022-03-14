import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1306Service } from '../services/kt-1306.service';
import * as Kt1306Actions from './kt-1306.actions';

@Injectable()
export class Kt1306Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1306Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1306Actions.loadKt1306Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1306Actions.loadKt1306Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1306Actions.loadKt1306Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1306Actions.loadKt1306UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1306Actions.loadKt1306UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1306Actions.loadKt1306Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1306Actions.loadKt1306CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1306Actions.loadKt1306CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1306Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpAlkaliTemizleme).pipe(
          map(({ data }) => Kt1306Actions.saveKt1306Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1306Actions.saveKt1306Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1306Actions.saveKt1306Success),
      map(() => Kt1306Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1306Service
  ) {}
}
