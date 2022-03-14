import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1241Service } from '../services/kt-1241.service';
import * as Kt1241Actions from './kt-1241.actions';

@Injectable()
export class Kt1241Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1241Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1241Actions.loadKt1241Success({ data })),
          catchError(({ error }) => observableOf(Kt1241Actions.loadKt1241Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1241Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtKromKaplamaTfsFlor).pipe(
          map(({ data }) => Kt1241Actions.saveKt1241Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1241Actions.saveKt1241Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1241Actions.saveKt1241Success),
      map(() => Kt1241Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1241Service) {}
}
