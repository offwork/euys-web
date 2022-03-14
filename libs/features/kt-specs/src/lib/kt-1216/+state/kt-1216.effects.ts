import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import * as Kt1216Actions from './kt-1216.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1216Service } from '../services/kt-1216.service';

@Injectable()
export class Kt1216Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1216Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1216Actions.loadKt1216Success({ data })),
          catchError(({ error }) => observableOf(Kt1216Actions.loadKt1216Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1216Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtCalHattiTavlama).pipe(
          map(({ data }) => Kt1216Actions.saveKt1216Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1216Actions.saveKt1216Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1216Actions.saveKt1216Success),
      map(() => Kt1216Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1216Service) {}
}
