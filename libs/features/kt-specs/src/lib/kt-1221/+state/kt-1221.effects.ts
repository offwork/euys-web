import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import * as Kt1221Actions from './kt-1221.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1221Service } from '../services/kt-1221.service';

@Injectable()
export class Kt1221Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1221Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1221Actions.loadKt1221Success({ data })),
          catchError(({ error }) => observableOf(Kt1221Actions.loadKt1221Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1221Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtCgl12Temizleme).pipe(
          map(({ data }) => Kt1221Actions.saveKt1221Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1221Actions.saveKt1221Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Kt1221Actions.saveKt1221Success),
    map(() => Kt1221Actions.init())
  )
);
  constructor(private readonly actions$: Actions, private service: Kt1221Service) {}
}
