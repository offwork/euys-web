import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1210Service } from '../services/kt-1210.service';
import * as Kt1210Actions from './kt-1210.actions';

@Injectable()
export class Kt1210Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1210Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1210Actions.loadKt1210Success({ data })),
          catchError(({ error }) => observableOf(Kt1210Actions.loadKt1210Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1210Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtDurulama).pipe(
          map(({ data }) => Kt1210Actions.saveKt1210Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1210Actions.saveKt1210Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1210Actions.saveKt1210Success),
      map(() => Kt1210Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1210Service) {}
}
