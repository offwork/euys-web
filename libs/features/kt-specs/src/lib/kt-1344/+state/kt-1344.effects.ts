import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1344Service } from '../services/kt-1344.service';
import * as Kt1344Actions from './kt-1344.actions';

@Injectable()
export class Kt1344Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1344Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1344Actions.loadKt1344Success({ data })),
          catchError(({ error }) =>
            observableOf(Kt1344Actions.loadKt1344Failure({ error }))
          )
        )
      )
    )
  );
  initHatlar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1344Actions.loadKt1344Success),
      switchMap(() =>
        this.service.getUtHatList().pipe(
          map(data => Kt1344Actions.loadKt1344HatlarSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kt1344Actions.loadKt1344HatlarFailure({ error }))
          )
        )
      )
    )
  );
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1344Actions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.ktSpMarkalama).pipe(
          map(({ data }) => Kt1344Actions.saveKt1344Success({ record: data })),
          catchError(({ error }) =>
            observableOf(Kt1344Actions.saveKt1344Failure({ error }))
          )
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1344Actions.saveKt1344Success),
      map(() => Kt1344Actions.init())
    )
  );
  constructor(
    private readonly actions$: Actions,
    private service: Kt1344Service
  ) {}
}
