import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1205Service } from '../services/kt-1205.service';
import * as Kt1205Actions from './kt-1205.actions';

@Injectable()
export class Kt1205Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1205Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1205Actions.loadKt1205Success({ data })),
          catchError(({ error }) => observableOf(Kt1205Actions.loadKt1205Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1205Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtAgirlik).pipe(
          map(({ data }) => Kt1205Actions.saveKt1205Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1205Actions.saveKt1205Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1205Actions.saveKt1205Success),
      map(() => Kt1205Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1205Service) {}
}
