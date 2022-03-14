import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1248Service } from '../services/kt-1248.service';
import * as Kt1248Actions from './kt-1248.actions';

@Injectable()
export class Kt1248Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1248Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1248Actions.loadKt1248Success({ data })),
          catchError(({ error }) => observableOf(Kt1248Actions.loadKt1248Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1248Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtSleeveKalinlik).pipe(
          map(({ data }) => Kt1248Actions.saveKt1248Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1248Actions.saveKt1248Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1248Actions.saveKt1248Success),
      map(() => Kt1248Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1248Service) {}
}
