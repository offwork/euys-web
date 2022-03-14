import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import * as Kt1215Actions from './kt-1215.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1215Service } from '../services/kt-1215.service';

@Injectable()
export class Kt1215Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1215Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1215Actions.loadKt1215Success({ data })),
          catchError(({ error }) => observableOf(Kt1215Actions.loadKt1215Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1215Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtBobHazTempYuzdeUzama).pipe(
          map(({ data }) => Kt1215Actions.saveKt1215Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1215Actions.saveKt1215Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Kt1215Actions.saveKt1215Success),
    map(() => Kt1215Actions.init())
  )
);
  constructor(private readonly actions$: Actions, private service: Kt1215Service) {}
}
