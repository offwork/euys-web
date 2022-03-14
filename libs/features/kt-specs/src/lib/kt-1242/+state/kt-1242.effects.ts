import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1242Service } from '../services/kt-1242.service';
import * as Kt1242Actions from './kt-1242.actions';


@Injectable()
export class Kt1242Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1242Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1242Actions.loadKt1242Success({ data })),
          catchError(({ error }) => observableOf(Kt1242Actions.loadKt1242Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1242Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtKromKaplamaTfsSo4).pipe(
          map(({ data }) => Kt1242Actions.saveKt1242Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1242Actions.saveKt1242Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1242Actions.saveKt1242Success),
      map(() => Kt1242Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1242Service) {}
}
