import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1232Service } from '../services/kt-1232.service';
import * as Kt1232Actions from './kt-1232.actions';

@Injectable()
export class Kt1232Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1232Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1232Actions.loadKt1232Success({ data })),
          catchError(({ error }) => observableOf(Kt1232Actions.loadKt1232Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1232Actions.saveKt1232Success),
      map(() => Kt1232Actions.init())
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1232Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtIiTenekeKalayKimyasal).pipe(
          map(({ data }) => Kt1232Actions.saveKt1232Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1232Actions.saveKt1232Failure({ error })))
        )
      )
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1232Service) {}
}
