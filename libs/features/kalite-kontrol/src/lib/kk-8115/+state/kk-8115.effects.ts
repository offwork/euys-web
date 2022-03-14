import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kk8115Service } from '../services/kk-8115.service';

import * as Kk8115Actions from './kk-8115.actions';

@Injectable()
export class Kk8115Effects {
  loadHSMBobinList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8115Actions.loadHSMBobinList, Kk8115Actions.qcKayitSuccess),
      switchMap(() =>
        this.service.getHSMBobinList().pipe(
          map(hsmBobinList =>
            Kk8115Actions.loadHSMBobinListSucess({ hsmBobinList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8115Actions.loadHSMBobinListFailure({ error }))
          )
        )
      )
    )
  );

  loadBagimsizNumuneList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8115Actions.loadBagimsizMesajList),
      switchMap(action =>
        this.service.getBagimsizNumuneList(action.bobinNo).pipe(
          map(bagimsizNumuneList =>
            Kk8115Actions.loadBagimsizNumuneListSuccess({ bagimsizNumuneList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8115Actions.loadBagimsizNumuneListFailure({ error }))
          )
        )
      )
    )
  );

  loadBagimsizMesajList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8115Actions.loadBagimsizMesajList),
      switchMap(action =>
        this.service.getBagimsizMesajList(action.bobinNo).pipe(
          map(bagimsizMesajList =>
            Kk8115Actions.loadBagimsizMesajListSuccess({ bagimsizMesajList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8115Actions.loadBagimsizMesajListFailure({ error }))
          )
        )
      )
    )
  );

  getSlabBilgisi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8115Actions.getSlabBilgisi),
      switchMap(action =>
        this.service.getSlabBilgisi(action.hatNo, action.bobinNo).pipe(
          map(slabBilgisi =>
            Kk8115Actions.getSlabBilgisiSuccess({
              slabBilgisi,
            })
          ),
          catchError(({ error }) =>
            observableOf(Kk8115Actions.getSlabBilgisiFailure({ error }))
          )
        )
      )
    )
  );
  getKabaHaddelemePasoList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8115Actions.getKabaHaddelemePaso),
      switchMap(action =>
        this.service
          .getKabaHaddelemePasoModelList(action.hatNo, action.bobinNo)
          .pipe(
            map(kabaHaddelemeBilgisi =>
              Kk8115Actions.getKabaHaddelemePasoSuccess({
                kabaHaddelemeBilgisi,
              })
            ),
            catchError(({ error }) =>
              observableOf(Kk8115Actions.getKabaHaddelemePasoFailure({ error }))
            )
          )
      )
    )
  );
  getFmPratigiList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8115Actions.getFmPratigiBilgileri),
      switchMap(action =>
        this.service.getFmPratigiModelList(action.hatNo, action.bobinNo).pipe(
          map(fmPratigiBilgisi =>
            Kk8115Actions.getFmPratigiBilgileriSuccess({ fmPratigiBilgisi })
          ),
          catchError(({ error }) =>
            observableOf(Kk8115Actions.getFmPratigiBilgileriFailure({ error }))
          )
        )
      )
    )
  );

  getQcKayitBilgileri$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8115Actions.getQCKayitBilgileri),
      switchMap(action =>
        this.service
          .getQCKayitBilgileri(
            action.hatNo,
            action.bobinNo,
            action.qcOnayYapilmis
          )
          .pipe(
            map(qcKayitBilgileri =>
              Kk8115Actions.getQCKayitBilgileriSuccess({ qcKayitBilgileri })
            ),
            catchError(({ error }) =>
              observableOf(Kk8115Actions.getQCKayitBilgileriFailure({ error }))
            )
          )
      )
    )
  );

  getButunAktifKusurList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8115Actions.getButunAktifKusurList),
      switchMap(action =>
        this.service.getButunAktifKusur(action.hatNo).pipe(
          map(butunAktifKusurList =>
            Kk8115Actions.getButunAktifKusurListSuccess({ butunAktifKusurList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8115Actions.getButunAktifKusurListFailure({ error }))
          )
        )
      )
    )
  );

  qcOnayHoldSingle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8115Actions.qcKayit),
      switchMap(action =>
        this.service.postQcOnay(action.qcOnay).pipe(
          map(() => Kk8115Actions.qcKayitSuccess()),
          catchError(({ error }) =>
            observableOf(Kk8115Actions.qcKayitFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kk8115Service
  ) {}
}
