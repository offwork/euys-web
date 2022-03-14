import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { KatsayiGirisService } from '../services/katsayi-giris.service';
import * as KatsayiGirisActions from './katsayi-giris.actions';

@Injectable()
export class KatsayiGrisEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KatsayiGirisActions.loadCoefficientInputRequest),
      switchMap(({ year, previousYear }) =>
        this.service.getAllCoefficients(year, previousYear).pipe(
          map(({ data }) => {
            return KatsayiGirisActions.loadCoefficientInputSuccess({ coefficients: data });
          }),
          catchError((error) => observableOf(KatsayiGirisActions.loadCoefficientInputFailure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KatsayiGirisActions.saveCoefficientInputRequest),
      switchMap(({ coefficients, year, previousYear }) =>
        this.service.saveAllDataGrid(coefficients).pipe(
          map((response) =>
            KatsayiGirisActions.saveCoefficientInputSuccess({ message: response.statusText, year, previousYear })
          ),
          catchError((error) => observableOf(KatsayiGirisActions.saveCoefficientInputFailure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KatsayiGirisActions.saveCoefficientInputSuccess),
      map(({ year, previousYear }) => KatsayiGirisActions.loadCoefficientInputRequest({ year, previousYear }))
    )
  );

  constructor(private actions$: Actions, private service: KatsayiGirisService) {}
}
