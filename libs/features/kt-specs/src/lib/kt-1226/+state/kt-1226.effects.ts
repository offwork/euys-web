import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1226Service } from '../services/kt-1226.service';

import * as Kt1226Actions from './kt-1226.actions';


@Injectable()
export class Kt1226Effects {
 
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1226Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1226Actions.loadKt1226Success({ data })),
          catchError(({ error }) => observableOf(Kt1226Actions.loadKt1226Failure({ error })))
        )
      )
    )
  );
 
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1226Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.KtAtEnineKalinlikVeIkiKenarFarklari).pipe(
          map(({ data }) => Kt1226Actions.saveKt1226Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1226Actions.saveKt1226Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1226Actions.saveKt1226Success),
      map(() => Kt1226Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1226Service) {}
}