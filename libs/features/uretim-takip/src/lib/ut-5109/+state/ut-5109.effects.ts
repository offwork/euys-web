import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Ut5109Service } from '../services/ut-5109.service';

import * as Ut5109Actions from './ut-5109.actions';

@Injectable()
export class Ut5109Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5109Actions.init),
      switchMap(() => 
      this.servive.merkezHaddeYagEmulListesiGetir().pipe(
        map(({ data }) => Ut5109Actions.loadUt5109Success({ data })),
        catchError(({ error }) => 
        observableOf(Ut5109Actions.loadUt5109Failure({error}))
        )
       )
      )
    )
  );

  loglar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5109Actions.loadUt5109Loglar),
      switchMap(action => 
      this.servive.logListesiGetir(action.utMerkezHaddeYagEmulsiyonModel).pipe(
        map(({ data }) => Ut5109Actions.loadUt5109LoglarSuccess({ data })),
        catchError(({ error }) => 
        observableOf(Ut5109Actions.loadUt5109LoglarFailure({error}))
        )
       )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5109Actions.save),
      switchMap(action =>
        this.servive.save(action.utMerkezHaddeYagEmulsiyonModel).pipe(
          map(({ data, code, message }) =>
            Ut5109Actions.saveUt5109Success({
              utMerkezHaddeYagEmulsiyonModel: data,
              code: String(code),
              message:String(message),
            })
          ),
          catchError(({ error }) =>
            observableOf(Ut5109Actions.saveUt5109Failure({ error }))
          )
        )
      )
    )
  );

  
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut5109Actions.update),
      switchMap(action =>
        this.servive.update(action.utMerkezHaddeYagEmulsiyonModel).pipe(
          map(({ data, code, message }) =>
            Ut5109Actions.updateUt5109Success({
              utMerkezHaddeYagEmulsiyonModel: data,
              code: String(code),
              message:String(message),
            })
          ),
          catchError(({ error }) =>
            observableOf(Ut5109Actions.updateUt5109Failure({ error }))
          )
        )
      )
    )
  );

  constructor(private readonly actions$: Actions,
    private servive: Ut5109Service) {}
}
