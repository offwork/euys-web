import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kk8140Service } from '../services/kk-8140.service';

import * as Kk8140Actions from './kk-8140.actions';

@Injectable()
export class Kk8140Effects {
  getButunAktifKusurList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8140Actions.getButunAktifKusurList),
      switchMap(action =>
        this.service.getButunAktifKusur(action.hatNo).pipe(
          map(butunAktifKusurList =>
            Kk8140Actions.getButunAktifKusurListSuccess({ butunAktifKusurList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8140Actions.getButunAktifKusurListFailure({ error }))
          )
        )
      )
    )
  );

  getYuzeyKusurKaydi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8140Actions.getYuzeyKusurKaydiList),
      switchMap(action => {
        return this.service
          .getYuzeyKusurKaydiList('331', 'C2110000080000')
          .pipe(
            map(yuzeyKusurKaydi =>
              Kk8140Actions.getYuzeyKusurKaydiListSuccess({ yuzeyKusurKaydi })
            ),
            catchError(({ error }) =>
              observableOf(
                Kk8140Actions.getYuzeyKusurKaydiListFailure({ error })
              )
            )
          );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kk8140Service
  ) {}
}
