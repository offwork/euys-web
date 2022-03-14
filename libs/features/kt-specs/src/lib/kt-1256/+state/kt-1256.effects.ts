import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1256Service } from '../services/kt-1256.service';
import * as Kt1256Actions from './kt-1256.actions';

@Injectable()
export class Kt1256Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1256Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1256Actions.loadKt1256Success({ data })),
          catchError(({ error }) => observableOf(Kt1256Actions.loadKt1256Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1256Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtYaglama).pipe(
          map(({ data }) => Kt1256Actions.saveKt1256Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1256Actions.saveKt1256Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1256Actions.saveKt1256Success),
      map(() => Kt1256Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1256Service) {}
}
