import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1233Service } from '../services/kt-1233.service';
import * as Kt1233Actions from './kt-1233.actions';

@Injectable()
export class Kt1233Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1233Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1233Actions.loadKt1233Success({ data })),
          catchError(({ error }) => observableOf(Kt1233Actions.loadKt1233Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1233Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtIiTenekeKalayKaplama).pipe(
          map(({ data }) => Kt1233Actions.saveKt1233Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1233Actions.saveKt1233Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Kt1233Actions.saveKt1233Success),
    map(() => Kt1233Actions.init())
  )
);
  constructor(private readonly actions$: Actions, private service: Kt1233Service) {}
}
