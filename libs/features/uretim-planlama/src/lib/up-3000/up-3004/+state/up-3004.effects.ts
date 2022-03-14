import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3004Service } from '../services/up-3004.service';
import * as actions from './up-3004.actions';

@Injectable()
export class Up3004Effects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.load),
      switchMap(({ year }) =>
        this.service.load(year).pipe(
          map(data => actions.loadSuccess({ data })),
          catchError(() => observableOf(actions.fail()))
        )
      )
    )
  );

  del$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.del),
      switchMap(({ yupTaslak }) =>
        this.service.del(yupTaslak).pipe(
          map(() => actions.done()),
          catchError(() => observableOf(actions.fail()))
        )
      )
    )
  );

  edit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.edit),
      switchMap(({ yupTaslak }) =>
        this.service.update(yupTaslak).pipe(
          map(() => actions.done()),
          catchError(() => observableOf(actions.fail()))
        )
      )
    )
  );

  approve$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.approve),
      switchMap(({ yupTaslak }) =>
        this.service.approve(yupTaslak).pipe(
          map(() => actions.done()),
          catchError(() => observableOf(actions.fail()))
        )
      )
    )
  );

  disapprove$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.disapprove),
      switchMap(({ yupTaslak }) =>
        this.service.disapprove(yupTaslak).pipe(
          map(() => actions.done()),
          catchError(() => observableOf(actions.fail()))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3004Service
  ) {}
}
