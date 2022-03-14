import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1236Service } from '../services/kt-1236.service';
import * as Kt1236Actions from './kt-1236.actions';

@Injectable()
export class Kt1236Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1236Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1236Actions.loadKt1236Success({ data })),
          catchError(({ error }) => observableOf(Kt1236Actions.loadKt1236Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1236Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtKalinlikSapmaAraligi).pipe(
          map(({ data }) => Kt1236Actions.saveKt1236Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1236Actions.saveKt1236Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1236Actions.saveKt1236Success),
      map(() => Kt1236Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1236Service) {}
}
