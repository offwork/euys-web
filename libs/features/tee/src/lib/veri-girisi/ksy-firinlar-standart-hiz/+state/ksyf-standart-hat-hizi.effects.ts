import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { KsyfStandartHizService } from '../services/ksyf-standart-hiz.service';
import * as KsyfStandartHatHiziActions from './ksyf-standart-hat-hizi.actions';

@Injectable()
export class KsyfStandartHatHiziEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KsyfStandartHatHiziActions.loadStandartHizRequest),
      switchMap(({ year }) =>
        this.service.getAllKsyfStandartHizlar(year).pipe(
          map(({ data }) =>
            KsyfStandartHatHiziActions.loadStandartHizSuccess({
              standartHiz: data,
            })
          ),
          catchError(error =>
            observableOf(
              KsyfStandartHatHiziActions.loadStandartHizFailure({ error })
            )
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KsyfStandartHatHiziActions.saveStandartHizRequest),
      switchMap(({ standarHizlar, year }) =>
        this.service.updateAllKsyfStandartHizlar(standarHizlar).pipe(
          map(response =>
            KsyfStandartHatHiziActions.saveStandartHizSuccess({
              message: response.statusText,
              year,
            })
          ),
          catchError(error =>
            observableOf(
              KsyfStandartHatHiziActions.saveStandartHizFailure({ error })
            )
          )
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KsyfStandartHatHiziActions.saveStandartHizSuccess),
      map(({ year }) =>
        KsyfStandartHatHiziActions.loadStandartHizRequest({ year })
      )
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KsyfStandartHatHiziActions.linesRequestLoad),
      switchMap(() =>
        this.service.getAllProductLines().pipe(
          map(lines =>
            KsyfStandartHatHiziActions.linesRequestSuccess({ lines })
          ),
          catchError(error =>
            observableOf(
              KsyfStandartHatHiziActions.linesRequestFailure({ error })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service: KsyfStandartHizService
  ) {}
}
