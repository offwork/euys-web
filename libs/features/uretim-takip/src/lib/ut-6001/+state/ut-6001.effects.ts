import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Ut6001Service } from '../services/ut-6001.service';

import * as Ut6001Actions from './ut-6001.actions';

@Injectable()
export class Ut6001Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6001Actions.init),
      switchMap(() =>
        this.service.kusurIstifPaketiListesiGetir().pipe(
          map(({ data }) => Ut6001Actions.loadUt6001Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut6001Actions.loadUt6001Failure({ error }))
          )
        )
      )
    )
  );

  configGetir$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6001Actions.config),
      switchMap(() =>
        this.service.configGetir().pipe(
          map(({ data }) =>
            Ut6001Actions.configUt6001Success({
              utKusurluIstifPaketiComboValueModel: data,
            })
          ),
          catchError(({ error }) =>
            observableOf(Ut6001Actions.config6001Failure({ error }))
          )
        )
      )
    )
  );

  sorgula$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6001Actions.sorgula),
      switchMap(action =>
        this.service.sorgula(action.kusurluIstifSorguModel).pipe(
          map(({ data }) => Ut6001Actions.loadUt6001Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut6001Actions.loadUt6001Failure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6001Actions.save),
      switchMap(action =>
        this.service.save(action.utKusurluIstifPaketModel).pipe(
          map(({ data }) =>
            Ut6001Actions.saveUt6001Success({ utKusurluIstifPaketModel: data })
          ),
          catchError(({ error }) =>
            observableOf(Ut6001Actions.saveUt6001Failure({ error }))
          )
        )
      )
    )
  );

  iptalEt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6001Actions.iptalEt),
      switchMap(action =>
        this.service.iptalEt(action.utKusurluIstifPaketModel).pipe(
          map(({ data }) =>
            Ut6001Actions.iptalUt6001Success({ utKusurluIstifPaketModel: data })
          ),
          catchError(({ error }) =>
            observableOf(Ut6001Actions.iptalUt6001Failure({ error }))
          )
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6001Actions.saveUt6001Success),
      map(() => Ut6001Actions.init())
    )
  );

  reloadIptal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6001Actions.iptalUt6001Success),
      map(() => Ut6001Actions.init())
    )
  );
  constructor(
    private readonly actions$: Actions,
    private service: Ut6001Service
  ) {}
}
