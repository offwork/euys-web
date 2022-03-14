import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1257Service } from '../services/kt-1257.service';
import * as Kt1257Actions from './kt-1257.actions';

@Injectable()
export class Kt1257Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1257Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1257Actions.loadKt1257Success({ data })),
          catchError(({ error }) => observableOf(Kt1257Actions.loadKt1257Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1257Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtYuzeyDuzgunlugu).pipe(
          map(({ data }) => Kt1257Actions.saveKt1257Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1257Actions.saveKt1257Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1257Actions.saveKt1257Success),
      map(() => Kt1257Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1257Service) {}
}
