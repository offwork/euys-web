import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1217Service } from '../services/kt-1217.service';
import * as Kt1217Actions from './kt-1217.actions';

@Injectable()
export class Kt1217Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1217Actions.init),
      switchMap(() =>
        this.service.getAllCalYuzdeUzama().pipe(
          map(({ data }) => Kt1217Actions.loadKt1217Success({ calYuzdeUzama: data })),
          catchError((error) => observableOf(Kt1217Actions.loadKt1217Failure({ error })))
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1217Actions.updateKt1217),
      switchMap(({ calYuzdeUzama }) =>
        this.service.updateCalYuzdeUzama(calYuzdeUzama).pipe(
          map(({ message }) => Kt1217Actions.updateKt1217Success({ message })),
          catchError((error) => observableOf(Kt1217Actions.updateKt1217Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1217Actions.saveKt1217),
      switchMap(({ calYuzdeUzama }) =>
        this.service.saveCalYuzdeUzama(calYuzdeUzama).pipe(
          map(({ message }) => Kt1217Actions.saveKt1217Success({ message })),
          catchError((error) => observableOf(Kt1217Actions.saveKt1217Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1217Actions.updateKt1217Success, Kt1217Actions.saveKt1217Success),
      map(() => Kt1217Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1217Service) {}
}
