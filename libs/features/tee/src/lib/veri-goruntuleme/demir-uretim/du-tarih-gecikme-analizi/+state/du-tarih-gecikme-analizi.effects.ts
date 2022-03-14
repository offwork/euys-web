import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DuTarihGecikmeAnaliziService } from '../services/du-tarih-gecikme-analizi.service';
import * as DuTarihGecikmeAnaliziActions from './du-tarih-gecikme-analizi.actions';

@Injectable()
export class DuTarihGecikmeAnaliziEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DuTarihGecikmeAnaliziActions.loadDuTarihGecikmeAnalizi),
      switchMap((action) =>
        this.service.getGecikmeAnaliziByDateRange(action.baslangic, action.bitis).pipe(
          map((response) => response.body),
          map(({ data }) =>
            DuTarihGecikmeAnaliziActions.loadDuTarihGecikmeAnaliziSuccess({
              tesisGecikmeleri: data,
            })
          ),
          catchError((error) => of(DuTarihGecikmeAnaliziActions.loadDuTarihGecikmeAnaliziFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: DuTarihGecikmeAnaliziService) {}
}
