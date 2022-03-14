import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Ut6002Service } from '../services/ut-6002.service';

import * as Ut6002Actions from './ut-6002.actions';

@Injectable()
export class Ut6002Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6002Actions.init),
      switchMap(() =>
        this.service.kusurIstifPaketiListesiGetir().pipe(
          map(({ data }) => Ut6002Actions.loadUt6002Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut6002Actions.loadUt6002Failure({ error }))
          )
        )
      )
    )
  );

  sorgula$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6002Actions.sorgula),
      switchMap(action =>
        this.service.sorgula(action.kusurluIstifSorguModel).pipe(
          map(({ data }) => Ut6002Actions.loadUt6002Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut6002Actions.loadUt6002Failure({ error }))
          )
        )
      )
    )
  );

  configGetir$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6002Actions.config),
      switchMap(() =>
        this.service.configGetir().pipe(
          map(({ data }) =>
            Ut6002Actions.configUt6002Success({
              utKusurluIstifPaketiComboValueModel: data,
            })
          ),
          catchError(({ error }) =>
            observableOf(Ut6002Actions.config6002Failure({ error }))
          )
        )
      )
    )
  );
  constructor(
    private readonly actions$: Actions,
    private service: Ut6002Service
  ) {}
}
