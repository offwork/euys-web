import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HedefFiiliGrafikService } from '../services/hedef-fiili-grafik.service';
import * as HedefFiiliGrafikActions from './hedef-fiili-grafik.actions';

@Injectable()
export class HedefFiiliGrafikEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HedefFiiliGrafikActions.loadHedefFiiliGrafik),
      switchMap(action =>
        this.service.getHedefFiiliGrafik(action.yil, action.hatKodu).pipe(
          map(response =>
            HedefFiiliGrafikActions.loadHedefFiiliGrafikSuccess({
              hedefFiiliGrafik: response.body?.data,
            })
          ),
          catchError(error =>
            observableOf(
              HedefFiiliGrafikActions.loadHedefFiiliGrafikFailure({ error })
            )
          )
        )
      )
    )
  );

  lines$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HedefFiiliGrafikActions.linesRequestLoad),
      switchMap(() =>
        this.service.getAllProductLines().pipe(
          map(lines => HedefFiiliGrafikActions.linesRequestSuccess({ lines })),
          catchError(error =>
            observableOf(HedefFiiliGrafikActions.linesRequestFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service: HedefFiiliGrafikService
  ) {}
}
