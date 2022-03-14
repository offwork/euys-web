import { Injectable } from '@angular/core';
import { AylikGecikmeAnalizi } from '@euys/api-interfaces';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SicakAylikGecikmeAnaliziService } from '../services/sicak-aylik-gecikme-analizi.service';
import * as SicakAylikGecikmeAnaliziActions from './sicak-aylik-gecikme-analizi.actions';

@Injectable()
export class SicakAylikGecikmeAnaliziEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SicakAylikGecikmeAnaliziActions.loadSicakAylikGecikmeAnalizi),
      switchMap((action) =>
        this.service.getAllDelaysByMonth(action.yil, action.ay).pipe(
          map((response) => response.body),
          map(({ data }: { data: AylikGecikmeAnalizi }) =>
            SicakAylikGecikmeAnaliziActions.loadSicakAylikGecikmeAnaliziSuccess({ gecikmeAnalizi: data })
          ),
          catchError((error) => of(SicakAylikGecikmeAnaliziActions.loadSicakAylikGecikmeAnaliziFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: SicakAylikGecikmeAnaliziService) {}
}
