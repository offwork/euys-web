import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1230Service } from '../services/kt-1230.service';
import * as Kt1230Actions from './kt-1230.actions';

@Injectable()
export class Kt1230Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1230Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1230Actions.loadKt1230Success({ data })),
          catchError(({ error }) => observableOf(Kt1230Actions.loadKt1230Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1230Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtIiTenekeAsitleme).pipe(
          map(({ data }) => Kt1230Actions.saveKt1230Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1230Actions.saveKt1230Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1230Actions.saveKt1230Success),
      map(() => Kt1230Actions.init())
    )
  );
  constructor(private readonly actions$: Actions, private service: Kt1230Service) {}
}
