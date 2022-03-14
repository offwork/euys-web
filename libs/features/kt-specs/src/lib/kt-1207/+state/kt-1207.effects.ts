import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1207Service } from '../services/kt-1207.service';
import * as Kt1207Actions from './kt-1207.actions';

@Injectable()
export class Kt1207Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1207Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1207Actions.loadKt1207Success({ data })),
          catchError((error) => observableOf(Kt1207Actions.loadKt1207Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1207Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtAmbalajPaket).pipe(
          map(({ data }) => Kt1207Actions.saveKt1207Success({ record: data })),
          catchError((error) => observableOf(Kt1207Actions.saveKt1207Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1207Actions.saveKt1207Success),
      map(() => Kt1207Actions.init())
    )
  );
  constructor(private readonly actions$: Actions, private service: Kt1207Service) {}
}
