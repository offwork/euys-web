import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as Kt1202Actions from './kt-1202.actions';
import { of as observableOf } from 'rxjs';
import { Kt1202Service } from '../services/kt-1202.service';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class Kt1202Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1202Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1202Actions.loadKt1202Success({ data })),
          catchError(({ error }) => observableOf(Kt1202Actions.loadKt1202Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1202Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAt1SckHadSarilmaSicakl).pipe(
          map(({ data }) => Kt1202Actions.saveKt1202Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1202Actions.saveKt1202Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1202Actions.saveKt1202Success),
      map(() => Kt1202Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1202Service) {}
}
