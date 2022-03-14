import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kk8116Service } from '../services/kk-8116.service';

import * as Kk8116Actions from './kk-8116.actions';

@Injectable()
export class Kk8116Effects {
  getButunAktifKusurList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8116Actions.getButunAktifKusurList),
      switchMap(action =>
        this.service.getButunAktifKusur(action.hatNo).pipe(
          map(butunAktifKusurList =>
            Kk8116Actions.getButunAktifKusurListSuccess({ butunAktifKusurList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8116Actions.getButunAktifKusurListFailure({ error }))
          )
        )
      )
    )
  );

  getYuzeyKusurKaydi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8116Actions.getYuzeyKusurKaydiList),
      switchMap(action => {
        return this.service
          .getYuzeyKusurKaydiList('332', 'C2110000010000')
          .pipe(
            map(yuzeyKusurKaydi =>
              Kk8116Actions.getYuzeyKusurKaydiListSuccess({ yuzeyKusurKaydi })
            ),
            catchError(({ error }) =>
              observableOf(
                Kk8116Actions.getYuzeyKusurKaydiListFailure({ error })
              )
            )
          );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kk8116Service
  ) {}
}
