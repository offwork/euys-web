import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1220Service } from '../services/kt-1220.service';
import * as Kt1220Actions from './kt-1220.actions';

@Injectable()
export class Kt1220Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1220Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1220Actions.loadKt1220Success({ data })),
          catchError(({ error }) => observableOf(Kt1220Actions.loadKt1220Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1220Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktCgl12Tavlama2).pipe(
          map(({ data }) => Kt1220Actions.saveKt1220Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1220Actions.saveKt1220Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1220Actions.saveKt1220Success),
      map(() => Kt1220Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1220Service) {}
}
