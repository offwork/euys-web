import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SicakTarihGecikmeAnaliziService } from '../services/sicak-tarih-gecikme-analizi.service';
import * as SicakTarihGecikmeAnaliziActions from './sicak-tarih-gecikme-analizi.actions';

@Injectable()
export class SicakTarihGecikmeAnaliziEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SicakTarihGecikmeAnaliziActions.loadSicakTarihGecikmeAnalizi),
      switchMap((action) =>
        this.service.getGecikmeAnaliziByDateRange(action.baslangic, action.bitis).pipe(
          map((response) => response.body),
          map(({ data }) =>
            SicakTarihGecikmeAnaliziActions.loadSicakTarihGecikmeAnaliziSuccess({ tesisGecikmeleri: data.aylik })
          ),
          catchError((error) => of(SicakTarihGecikmeAnaliziActions.loadSicakTarihGecikmeAnaliziFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: SicakTarihGecikmeAnaliziService) {}
}
