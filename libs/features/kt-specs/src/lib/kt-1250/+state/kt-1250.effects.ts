import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1250Service } from '../services/kt-1250.service';
import * as Kt1250Actions from './kt-1250.actions';

@Injectable()
export class Kt1250Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1250Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1250Actions.loadKt1250Success({ data })),
          catchError(({ error }) => observableOf(Kt1250Actions.loadKt1250Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1250Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtTemperHaddeYuzdeUzama).pipe(
          map(({ data }) => Kt1250Actions.saveKt1250Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1250Actions.saveKt1250Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1250Actions.saveKt1250Success),
      map(() => Kt1250Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1250Service) {}
}
