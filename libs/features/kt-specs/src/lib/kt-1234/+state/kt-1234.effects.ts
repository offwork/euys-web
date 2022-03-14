import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1234Service } from '../services/kt-1234.service';
import * as Kt1234Actions from './kt-1234.actions';

@Injectable()
export class Kt1234Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1234Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1234Actions.loadKt1234Success({ data })),
          catchError(({ error }) => observableOf(Kt1234Actions.loadKt1234Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1234Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtIiTenekeTemizleme).pipe(
          map(({ data }) => Kt1234Actions.saveKt1234Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1234Actions.saveKt1234Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Kt1234Actions.saveKt1234Success),
    map(() => Kt1234Actions.init())
  )
);

  constructor(private readonly actions$: Actions, private service: Kt1234Service) {}
}
