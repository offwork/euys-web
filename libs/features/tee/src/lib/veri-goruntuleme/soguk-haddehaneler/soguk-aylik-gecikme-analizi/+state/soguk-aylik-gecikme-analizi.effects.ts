import { Injectable } from '@angular/core';
import { AylikGecikmeAnalizi } from '@euys/api-interfaces';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SogukAylikGecikmeAnaliziService } from '../services/soguk-aylik-gecikme-analizi.service';
import * as SogukAylikGecikmeAnaliziActions from './soguk-aylik-gecikme-analizi.actions';

@Injectable()
export class SogukAylikGecikmeAnaliziEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SogukAylikGecikmeAnaliziActions.loadSogukAylikGecikmeAnalizi),
      switchMap((action) =>
        this.service.getAllDelaysByMonth(action.yil, action.ay).pipe(
          map((response) => response.body),
          map(({ data }: { data: AylikGecikmeAnalizi }) =>
            SogukAylikGecikmeAnaliziActions.loadSogukAylikGecikmeAnaliziSuccess({ gecikmeAnalizi: data })
          ),
          catchError((error) => of(SogukAylikGecikmeAnaliziActions.loadSogukAylikGecikmeAnaliziFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: SogukAylikGecikmeAnaliziService) {}
}
