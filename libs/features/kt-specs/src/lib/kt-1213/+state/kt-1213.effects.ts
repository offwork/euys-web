import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1213Service } from '../services/kt-1213.service';
import * as Kt1213Actions from './kt-1213.actions';

@Injectable()
export class Kt1213Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1213Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1213Actions.loadKt1213Success({ data })),
          catchError(({ error }) => observableOf(Kt1213Actions.saveKt1213Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1213Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtBobinBalikKuyrugu).pipe(
          map(({ data }) => Kt1213Actions.saveKt1213Success({ record: data })),
          catchError((error) => observableOf(Kt1213Actions.saveKt1213Failure({ error })))
        )
      )
    )
  );

  
  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1213Actions.saveKt1213Success),
      map(() => Kt1213Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1213Service) {}
}
