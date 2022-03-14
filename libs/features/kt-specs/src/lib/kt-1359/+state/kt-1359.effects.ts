import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1359Service } from '../services/kt-1359.service';
import * as Kt1359Actions from './kt-1359.actions';

@Injectable()
export class Kt1359Effects {
  initConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1359Actions.initConfig),
      switchMap(() =>
        this.service.getConfig().pipe(
          map(({ data }) => Kt1359Actions.initConfigSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1359Actions.initConfigFailure({ error }))
          )
        )
      )
    )
  );

  initYaglamaList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1359Actions.initYaglamaList),
      switchMap(() =>
        this.service.getYaglamaList().pipe(
          map(({ data }) => Kt1359Actions.initYaglamaListSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1359Actions.initYaglamaListFailure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1359Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSPYaglamaSpec).pipe(
          map(({ data }) => Kt1359Actions.saveKt1359Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1359Actions.saveKt1359Failure({ error }))
          )
        )
      )
    )
  );
  // reload$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(Kt1359Actions.saveKt1359Success),
  //     map(() => Kt1359Actions.init())
  //   )
  // );

  constructor(
    private readonly actions$: Actions,
    private service: Kt1359Service
  ) {}
}
