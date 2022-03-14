import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1239Service } from '../services/kt-1239.service';
import * as Kt1239Actions from './kt-1239.actions';

@Injectable()
export class Kt1239Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1239Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1239Actions.loadKt1239Success({ data })),
          catchError(({ error }) => observableOf(Kt1239Actions.loadKt1239Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1239Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtKromKaplamaTfsCro3).pipe(
          map(({ data }) => Kt1239Actions.saveKt1239Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1239Actions.saveKt1239Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1239Actions.saveKt1239Success),
      map(() => Kt1239Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1239Service) {}
}
