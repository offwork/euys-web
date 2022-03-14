import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import { Kk8103Service } from '../services/kk-8103.service';
import { of as observableOf } from 'rxjs';

import * as Kk8103Actions from './kk-8103.actions';

@Injectable()
export class Kk8103Effects {
  initMusteriList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8103Actions.initMusteriList),
      switchMap(() =>
        this.service.getMusteriler().pipe(
          map(data => Kk8103Actions.initMusteriListSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kk8103Actions.initMusteriListFailure({ error }))
          )
        )
      )
    )
  );

  initUrunList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8103Actions.initUrunList),
      switchMap(() =>
        this.service.getUrunler().pipe(
          map(data => Kk8103Actions.initUrunListSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kk8103Actions.initUrunListFailure({ error }))
          )
        )
      )
    )
  );

  initKaliteUrunList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8103Actions.initKaliteList),
      switchMap(() =>
        this.service.getKaliteler().pipe(
          map(data => Kk8103Actions.initKaliteListSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kk8103Actions.initKaliteListFailure({ error }))
          )
        )
      )
    )
  );

  saveOprBilgi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8103Actions.saveOprBilgi),
      switchMap(action =>
        this.service.saveOprBilgi(action.oprBilgiKayit).pipe(
          map(data =>
            Kk8103Actions.saveOprBilgiSuccess({ oprBilgiKayit: data })
          ),
          catchError(({ error }) =>
            observableOf(Kk8103Actions.saveOprBilgiFailure({ error }))
          )
        )
      )
    )
  );

  getOprBilgilendirmeGorselList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8103Actions.getOprBilgilendirmeGorselList),
      switchMap(action =>
        this.service.getOprBilgiGorselList(action.idOperatorBilgilendirme).pipe(
          map(operatorGorselList =>
            Kk8103Actions.getOprBilgilendirmeGorselListSuccess({
              operatorGorselList,
            })
          ),
          catchError(({ error }) =>
            observableOf(
              Kk8103Actions.getOprBilgilendirmeGorselListFailure({ error })
            )
          )
        )
      )
    )
  );

  addOprBilgilendirmeGorsel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8103Actions.addOprBilgilendirmeGorsel),
      switchMap(action =>
        this.service
          .postOprBilgilendirmeGorsel(
            action.idOperatorBilgilendirme,
            action.data
          )
          .pipe(
            map(operatorGorselList =>
              Kk8103Actions.addOprBilgilendirmeGorselSuccess({
                operatorGorselList,
              })
            ),
            catchError(({ error }) =>
              observableOf(
                Kk8103Actions.addOprBilgilendirmeGorselFailure({ error })
              )
            )
          )
      )
    )
  );

  removeOprBilgilendirmeGorsel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8103Actions.removeOprBilgilendirmeGorsel),
      switchMap(action =>
        this.service.deleteOprGorsel(action.gorsel).pipe(
          map(operatorGorselList =>
            Kk8103Actions.removeOprBilgilendirmeGorselSuccess({
              operatorGorselList,
            })
          ),
          catchError(({ error }) =>
            observableOf(
              Kk8103Actions.removeOprBilgilendirmeGorselFailure({ error })
            )
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kk8103Service
  ) {}
}
