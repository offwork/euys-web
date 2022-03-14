import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kk8102Service } from '../services/kk-8102.service';
import * as Kk8102Actions from './kk-8102.actions';

@Injectable()
export class Kk8102Effects {
  initKusurGörüntüleme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8102Actions.initKusurGoruntuleme),
      switchMap(() =>
        this.service.getKusurGoruntuleme().pipe(
          map(data => Kk8102Actions.initKusurGoruntulemeSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kk8102Actions.initKusurGoruntulemeFailure({ error }))
          )
        )
      )
    )
  );

  initHatList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8102Actions.initHatList),
      switchMap(() =>
        this.service.getUtHatList().pipe(
          map(data => Kk8102Actions.initHatListSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kk8102Actions.initHatListFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kk8102Service
  ) {}
}
