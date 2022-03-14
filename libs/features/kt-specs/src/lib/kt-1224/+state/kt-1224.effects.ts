import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as Kt1224Actions from './kt-1224.actions';
import { of as observableOf } from 'rxjs';
import { Kt1224Service } from '../services/kt-1224.service';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class Kt1224Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1224Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1224Actions.loadKt1224Success({ data })),
          catchError(({ error }) => observableOf(Kt1224Actions.loadKt1224Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1224Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtDokumCelikKalitesi).pipe(
          map(({ data }) => Kt1224Actions.saveKt1224Success({ record: data })),
          catchError((error) => observableOf(Kt1224Actions.saveKt1224Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1224Actions.saveKt1224Success),
      map(() => Kt1224Actions.init())
    )
  );
  constructor(private readonly actions$: Actions, private service: Kt1224Service) {}
}
