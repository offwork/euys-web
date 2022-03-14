import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1211Service } from '../services/kt-1211.service';
import * as Kt1211Actions from './kt-1211.actions';

@Injectable()
export class Kt1211Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1211Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1211Actions.loadKt1211Success({ data })),
          catchError(({ error }) => observableOf(Kt1211Actions.loadKt1211Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1211Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtNumune).pipe(
          map(({ data }) => Kt1211Actions.saveKt1211Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1211Actions.saveKt1211Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1211Actions.saveKt1211Success),
      map(() => Kt1211Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1211Service) {}
}
