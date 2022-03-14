import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CuTarihGecikmeAnaliziService } from '../services/cu-tarih-gecikme-analizi.service';
import * as CuTarihGecikmeAnaliziActions from './cu-tarih-gecikme-analizi.actions';

@Injectable()
export class CuTarihGecikmeAnaliziEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CuTarihGecikmeAnaliziActions.loadCuTarihGecikmeAnalizi),
      switchMap((action) =>
        this.service.getGecikmeAnaliziByDateRange(action.baslangic, action.bitis).pipe(
          map((response) => response.body),
          map(({ data }) =>
            CuTarihGecikmeAnaliziActions.loadCuTarihGecikmeAnaliziSuccess({
              tesisGecikmeleri: data,
            })
          ),
          catchError((error) => of(CuTarihGecikmeAnaliziActions.loadCuTarihGecikmeAnaliziFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: CuTarihGecikmeAnaliziService) {}
}
