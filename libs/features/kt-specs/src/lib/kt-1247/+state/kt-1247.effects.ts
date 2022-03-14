import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1247Service } from '../services/kt-1247.service';
import * as Kt1247Actions from './kt-1247.actions';

@Injectable()
export class Kt1247Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1247Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1247Actions.loadKt1247Success({ data })),
          catchError(({ error }) => observableOf(Kt1247Actions.loadKt1247Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1247Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtSlabYuzeyTemizleme).pipe(
          map(({ data }) => Kt1247Actions.saveKt1247Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1247Actions.saveKt1247Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1247Actions.saveKt1247Success),
      map(() => Kt1247Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1247Service) {}
}
