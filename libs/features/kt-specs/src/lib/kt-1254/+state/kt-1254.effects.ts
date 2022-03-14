import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1254Service } from '../services/kt-1254.service';
import * as Kt1254Actions from './kt-1254.actions';

@Injectable()
export class Kt1254Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1254Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1254Actions.loadKt1254Success({ data })),
          catchError(({ error }) => observableOf(Kt1254Actions.loadKt1254Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1254Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtTincalHattiTemizleme).pipe(
          map(({ data }) => Kt1254Actions.saveKt1254Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1254Actions.saveKt1254Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1254Actions.saveKt1254Success),
      map(() => Kt1254Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1254Service) {}
}
