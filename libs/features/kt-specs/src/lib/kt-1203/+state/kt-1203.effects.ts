import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1203Service } from '../services/kt-1203.service';
import * as Kt1203Actions from './kt-1203.actions';

@Injectable()
export class Kt1203Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1203Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1203Actions.loadKt1203Success({ data })),
          catchError(({ error }) => observableOf(Kt1203Actions.loadKt1203Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1203Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.KtAt2SckHadIkmalSicakl).pipe(
          map(({ data }) => Kt1203Actions.saveKt1203Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1203Actions.saveKt1203Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1203Actions.saveKt1203Success),
      map(() => Kt1203Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1203Service) {}
}
