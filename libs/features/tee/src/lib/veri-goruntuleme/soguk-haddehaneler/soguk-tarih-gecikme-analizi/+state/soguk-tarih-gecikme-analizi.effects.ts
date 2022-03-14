import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SogukTarihGecikmeAnaliziService } from '../services/soguk-tarih-gecikme-analizi.service';
import * as SogukTarihGecikmeAnaliziActions from './soguk-tarih-gecikme-analizi.actions';

@Injectable()
export class SogukTarihGecikmeAnaliziEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SogukTarihGecikmeAnaliziActions.loadSogukTarihGecikmeAnalizi),
      switchMap((action) =>
        this.service.getGecikmeAnaliziByDateRange(action.baslangic, action.bitis).pipe(
          map((response) => response.body),
          map(({ data }) =>
            SogukTarihGecikmeAnaliziActions.loadSogukTarihGecikmeAnaliziSuccess({ tesisGecikmeleri: data.aylik })
          ),
          catchError((error) => of(SogukTarihGecikmeAnaliziActions.loadSogukTarihGecikmeAnaliziFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: SogukTarihGecikmeAnaliziService) {}
}
