import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1249Service } from '../services/kt-1249.service';
import * as Kt1249Actions from './kt-1249.actions';

@Injectable()
export class Kt1249Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1249Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1249Actions.loadKt1249Success({ data })),
          catchError(({ error }) => observableOf(Kt1249Actions.loadKt1249Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1249Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtTeleskopiToleransi).pipe(
          map(({ data }) => Kt1249Actions.saveKt1249Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1249Actions.saveKt1249Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1249Actions.saveKt1249Success),
      map(() => Kt1249Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1249Service) {}
}
