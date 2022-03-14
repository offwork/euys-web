import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1258Service } from '../services/kt-1258.service';
import * as Kt1258Actions from './kt-1258.actions';

@Injectable()
export class Kt1258Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1258Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1258Actions.loadKt1258Success({ data })),
          catchError(({ error }) => observableOf(Kt1258Actions.loadKt1258Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1258Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtYuzeyGorunumu).pipe(
          map(({ data }) => Kt1258Actions.saveKt1258Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1258Actions.saveKt1258Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1258Actions.saveKt1258Success),
      map(() => Kt1258Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1258Service) {}
}
