import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import * as Kt1222Actions from './kt-1222.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1222Service } from '../services/kt-1222.service';

@Injectable()
export class Kt1222Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1222Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1222Actions.loadKt1222Success({ data })),
          catchError(({ error }) => observableOf(Kt1222Actions.loadKt1222Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1222Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtCgl12TempYuzdeUzama).pipe(
          map(({ data }) => Kt1222Actions.saveKt1222Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1222Actions.saveKt1222Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Kt1222Actions.saveKt1222Success),
    map(() => Kt1222Actions.init())
  )
);
  constructor(private readonly actions$: Actions, private service: Kt1222Service) {}
}
