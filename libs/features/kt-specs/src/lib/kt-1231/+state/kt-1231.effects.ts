import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import * as Kt1231Actions from './kt-1231.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1231Service } from '../services/kt-1231.service';

@Injectable()
export class Kt1231Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1231Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1231Actions.loadKt1231Success({ data })),
          catchError(({ error }) => observableOf(Kt1231Actions.loadKt1231Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1231Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtIiTenekeKalayErgitme).pipe(
          map(({ data }) => Kt1231Actions.saveKt1231Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1231Actions.saveKt1231Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Kt1231Actions.saveKt1231Success),
    map(() => Kt1231Actions.init())
  )
);
  constructor(private readonly actions$: Actions, private service: Kt1231Service) {}
}
