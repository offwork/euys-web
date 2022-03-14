import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as Kt1204Actions from './kt-1204.actions';
import { of as observableOf } from 'rxjs';
import { Kt1204Service } from '../services/kt-1204.service';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class Kt1204Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1204Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1204Actions.loadKt1204Success({ data })),
          catchError(({error}) => observableOf(Kt1204Actions.loadKt1204Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
     this.actions$.pipe(
      ofType(Kt1204Actions.save),
       switchMap((action) =>
          this.service.saveOrUpdate(action.ktAt2SckHadSarilmaSicakl).pipe(
            map(({ data }) => Kt1204Actions.saveKt1204Success({ record: data })),
          catchError(({error}) => observableOf(Kt1204Actions.saveKt1204Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Kt1204Actions.saveKt1204Success),
    map(() => Kt1204Actions.init())
  )
);

  constructor(private readonly actions$: Actions, private service: Kt1204Service) {}
}