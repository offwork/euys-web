import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1212Service } from '../services/kt-1212.service';
import * as Kt1212Actions from './kt-1212.actions';

@Injectable()
export class Kt1212Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1212Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1212Actions.loadKt1212Success({ data })),
          catchError((error) => observableOf(Kt1212Actions.loadKt1212Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1212Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtBafHattiTavlama).pipe(
          map(({ data }) => Kt1212Actions.saveKt1212Success({ record: data })),
          catchError((error) => observableOf(Kt1212Actions.saveKt1212Failure({ error })))
        )
      )
    )
  );
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1212Actions.saveKt1212Success),
      map(() => Kt1212Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1212Service) {}
}
