import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import * as Kk8141Actions from './kk-8141.actions';
import { of as observableOf } from 'rxjs';
import { Kk8141Service } from '../services/kk-8141.service';

@Injectable()
export class Kk8141Effects {
  getYuzeyKusurKaydi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8141Actions.getYuzeyKusurKaydiList),
      switchMap(action => {
        return this.service.getYuzeyKusurKaydiList('332', action.bobinNo).pipe(
          map(yuzeyKusurKaydi =>
            Kk8141Actions.getYuzeyKusurKaydiListSuccess({ yuzeyKusurKaydi })
          ),
          catchError(({ error }) =>
            observableOf(Kk8141Actions.getYuzeyKusurKaydiListFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,

    private service: Kk8141Service
  ) {}
}
