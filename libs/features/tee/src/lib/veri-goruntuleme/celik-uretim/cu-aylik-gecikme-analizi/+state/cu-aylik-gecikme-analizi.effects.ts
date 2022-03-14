import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CuAylikGecikmeAnaliziService } from '../services/cu-aylik-gecikme-analizi.service';
import * as CuAylikGecikmeAnaliziActions from './cu-aylik-gecikme-analizi.actions';

@Injectable()
export class CuAylikGecikmeAnaliziEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CuAylikGecikmeAnaliziActions.loadCuAylikGecikmeAnaliziByMonth),
      switchMap((action) =>
        this.service.getAllDelaysByMonth(action.yil, action.ay).pipe(
          map((response) => response.body),
          map(({ data }) =>
            CuAylikGecikmeAnaliziActions.loadCuAylikGecikmeAnaliziSuccess({
              gecikmeAnalizi: data,
            })
          ),
          catchError((error) => of(CuAylikGecikmeAnaliziActions.loadCuAylikGecikmeAnaliziFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: CuAylikGecikmeAnaliziService) {}
}
