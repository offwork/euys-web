import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1240Service } from '../services/kt-1240.service';
import * as Kt1240Actions from './kt-1240.actions';

@Injectable()
export class Kt1240Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1240Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1240Actions.loadKt1240Success({ data })),
          catchError(({ error }) => observableOf(Kt1240Actions.loadKt1240Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1240Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtKromKaplamaTfsDragout).pipe(
          map(({ data }) => Kt1240Actions.saveKt1240Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1240Actions.saveKt1240Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1240Actions.saveKt1240Success),
      map(() => Kt1240Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1240Service) {}
}
