import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kk8246Service } from '../services/kk-8246.service';
import * as Kk8246Actions from './kk-8246.actions';

@Injectable()
export class Kk8246Effects {
  getBagimsizNumuneGoruntuleme = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8246Actions.getBagimsizNumuneGoruntuleme),
      switchMap(action =>
        this.service.getBagimsizNumuneGoruntuleme().pipe(
          map(bagimsizNumuneGoruntuleme =>
            Kk8246Actions.getBagimsizNumuneGoruntulemeSuccess({
              bagimsizNumuneGoruntuleme,
            })
          ),
          catchError(({ error }) =>
            observableOf(
              Kk8246Actions.getBagimsizNumuneGoruntulemeFailure({ error })
            )
          )
        )
      )
    )
  );
  getBagimsizMesajBilgileri = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8246Actions.getBagimsizMesajBilgileri),
      switchMap(action =>
        this.service.getBagimsizMesajBilgileri().pipe(
          map(bagimsizMesajBilgileri =>
            Kk8246Actions.getBagimsizMesajBilgileriSuccess({
              bagimsizMesajBilgileri,
            })
          ),
          catchError(({ error }) =>
            observableOf(
              Kk8246Actions.getBagimsizMesajBilgileriFailure({ error })
            )
          )
        )
      )
    )
  );

  getCplHattiAsitleme = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8246Actions.getCplHattiAsitleme),
      switchMap(action =>
        this.service.getCplHattiAsitleme().pipe(
          map(cplHattiAsitleme =>
            Kk8246Actions.getCplHattiAsitlemeSuccess({
              cplHatti: cplHattiAsitleme,
            })
          ),
          catchError(({ error }) =>
            observableOf(Kk8246Actions.getCplHattiAsitlemeFailure({ error }))
          )
        )
      )
    )
  );

  getCplHattiDurulama = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8246Actions.getCplHattiDurulama),
      switchMap(action =>
        this.service.getCplHattiDurulama().pipe(
          map(CplHattiDurulama =>
            Kk8246Actions.getCplHattiDurulamaSuccess({
              cplHatti: CplHattiDurulama,
            })
          ),
          catchError(({ error }) =>
            observableOf(Kk8246Actions.getCplHattiDurulamaFailure({ error }))
          )
        )
      )
    )
  );

  loadPPLBobinList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8246Actions.getAsitlemeBobinList),
      switchMap(action =>
        this.service.getAsitlemeBobinList(action.hatNo).pipe(
          map(asitlemeBobinList =>
            Kk8246Actions.getAsitlemeBobinListSuccess({ asitlemeBobinList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8246Actions.getAsitlemeBobinListFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kk8246Service
  ) {}
}
