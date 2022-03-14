import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1332Service } from '../services/kt-1332.service';
import * as Kt1332Actions from './kt-1332.actions';

@Injectable()
export class Kt1332Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1332Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1332Actions.loadKt1332Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1332Actions.loadKt1332Failure({ error }))
          )
        )
      )
    )
  );

  initUrunler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1332Actions.loadKt1332Success),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kt1332Actions.loadKt1332UrunlerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1332Actions.loadKt1332UrunlerFailure({ error }))
          )
        )
      )
    )
  );

  initCelikler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1332Actions.loadKt1332Success),
      switchMap(() =>
        this.service.getCelikler().pipe(
          map(data => Kt1332Actions.loadKt1332CeliklerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1332Actions.loadKt1332CeliklerFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1332Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpIiTenekeKalayKimyasal).pipe(
          map(({ data }) => Kt1332Actions.saveKt1332Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1332Actions.saveKt1332Failure({ error }))
          )
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1332Actions.saveKt1332Success),
      map(() => Kt1332Actions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1332Service
  ) {}
}
