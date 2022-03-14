import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import { Kk8117Service } from '../services/kk-8117.service';
import { of as observableOf } from 'rxjs';
import * as Kk8117Actions from './kk-8117.actions';

@Injectable()
export class Kk8117Effects {
  getYuzeyKusurKaydi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8117Actions.getYuzeyKusurKaydiList),
      switchMap(action => {
        return this.service.getYuzeyKusurKaydiList('332', action.bobinNo).pipe(
          map(yuzeyKusurKaydi =>
            Kk8117Actions.getYuzeyKusurKaydiListSuccess({ yuzeyKusurKaydi })
          ),
          catchError(({ error }) =>
            observableOf(Kk8117Actions.getYuzeyKusurKaydiListFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kk8117Service
  ) {}
}
