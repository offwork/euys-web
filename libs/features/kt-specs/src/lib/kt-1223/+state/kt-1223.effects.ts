import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1223Service } from '../services/kt-1223.service';

import * as Kt1223Actions from './kt-1223.actions';


@Injectable()
export class Kt1223Effects {
 
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1223Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1223Actions.loadKt1223Success({ data })),
          catchError(({ error }) => observableOf(Kt1223Actions.loadKt1223Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Kt1223Actions.save),
    switchMap((action) =>
      this.service.saveOrUpdate(action.KtAtDemirAlasimVeGaFirini).pipe(
        map(({ data }) => Kt1223Actions.saveKt1223Success({ record: data })),
        catchError(({ error }) => observableOf(Kt1223Actions.saveKt1223Failure({ error })))
      )
    )
  )
);

reload$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Kt1223Actions.saveKt1223Success),
    map(() => Kt1223Actions.init())
  )
);

  constructor(private readonly actions$: Actions, private service: Kt1223Service) {}
}
