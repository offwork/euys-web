import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DuAylikGecikmeAnaliziService } from '../services/du-aylik-gecikme-analizi.service';
import * as DuAylikGecikmeAnaliziActions from './du-aylik-gecikme-analizi.actions';

@Injectable()
export class DuAylikGecikmeAnaliziEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DuAylikGecikmeAnaliziActions.loadDuAylikGecikmeAnaliziByMonth),
      switchMap((action) =>
        this.service.getAllDelaysByMonth(action.yil, action.ay).pipe(
          map((response) => response.body),
          map(({ data }) =>
            DuAylikGecikmeAnaliziActions.loadDuAylikGecikmeAnaliziSuccess({
              gecikmeAnalizi: data,
            })
          ),
          catchError((error) => of(DuAylikGecikmeAnaliziActions.loadDuAylikGecikmeAnaliziFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: DuAylikGecikmeAnaliziService) {}
}
