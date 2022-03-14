import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { Kk8139Service } from '../services/kk-8139.service';
import * as Kk8139Actions from './kk-8139.actions';

@Injectable()
export class Kk8139Effects {
  initOnayList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8139Actions.initOnayList),
      switchMap(action =>
        this.service.getHSMBobinModelList(action.data).pipe(
          map(data => Kk8139Actions.initOnayListSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kk8139Actions.initOnayListFailure({ error }))
          )
        )
      )
    )
  );
  getCmPratigiList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8139Actions.getCmPratigiList),
      switchMap(action => {
        return this.service.getCmPratigiList(action.data).pipe(
          map(cmSmPratigiModelList =>
            Kk8139Actions.getCmPratigiListSuccess({ cmSmPratigiModelList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8139Actions.getCmPratigiListFailure({ error }))
          )
        );
      })
    )
  );
  getSmPratigiList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8139Actions.getSmPratigiList),
      switchMap(action => {
        return this.service.getSmPratigiList(action.data).pipe(
          map(cmSmPratigiModelList =>
            Kk8139Actions.getSmPratigiListSuccess({ cmSmPratigiModelList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8139Actions.getSmPratigiListFailure({ error }))
          )
        );
      })
    )
  );
  getBagimsizNumune$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8139Actions.getBagimsizNumuneModelList),
      switchMap(action =>
        this.service.getBagimsizNumuneList(action.hatNo, action.bobinNo).pipe(
          map(bagimsizNumuneList =>
            Kk8139Actions.getBagimsizNumuneSuccess({
              bagimsizNumuneList,
            })
          ),
          catchError(({ error }) =>
            observableOf(Kk8139Actions.getBagimsizNumuneFailure({ error }))
          )
        )
      )
    )
  );
  getBagimsizMesajList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8139Actions.getBagimsizMesajList),
      switchMap(action => {
        return this.service.getBagimsizMesajBilgileri(action.bobinNo).pipe(
          map(bagimsizMesajList =>
            Kk8139Actions.getBagimsizMesajListSuccess({ bagimsizMesajList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8139Actions.getBagimsizMesajListFailure({ error }))
          )
        );
      })
    )
  );

  getButunAktifKusurList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8139Actions.getButunAktifKusurList),
      switchMap(action =>
        this.service.getButunAktifKusur(action.hatNo).pipe(
          map(butunAktifKusurList =>
            Kk8139Actions.getButunAktifKusurListSuccess({ butunAktifKusurList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8139Actions.getButunAktifKusurListFailure({ error }))
          )
        )
      )
    )
  );

  getQcKayitBilgileri$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8139Actions.getQcKayitBilgileri),
      switchMap(action => {
        return this.service.getQcKayitBilgileri(action.data).pipe(
          map(qcKayitBilgileri =>
            Kk8139Actions.getQcKayitBilgileriSuccess({ qcKayitBilgileri })
          ),
          catchError(({ error }) =>
            observableOf(Kk8139Actions.getQcKayitBilgileriFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kk8139Service
  ) {}
}
