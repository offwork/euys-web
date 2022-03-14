import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { KapasitelerService } from '../services/kapasiteler.service';
import * as KapasitelerActions from './kapasiteler.actions';

@Injectable()
export class KapasitelerEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KapasitelerActions.loadKapasitelerRequest),
      switchMap(({ year, oncekiYil }) =>
        this.service.getKapasitler(year, oncekiYil).pipe(
          map(({ data }) => KapasitelerActions.loadKapasitelerSuccess({ kapasite: data })),
          catchError((error) => observableOf(KapasitelerActions.loadKapasitelerFailure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KapasitelerActions.saveKapasitelerRequest),
      switchMap(({ kapasite, year, oncekiYil }) =>
        this.service.updateKapasiteler(kapasite).pipe(
          map((response) =>
            KapasitelerActions.saveKapasitelerSuccess({ message: response.statusText, year, oncekiYil })
          ),
          catchError((error) => observableOf(KapasitelerActions.saveKapasitelerFailure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KapasitelerActions.saveKapasitelerSuccess),
      map(({ year, oncekiYil }) => KapasitelerActions.loadKapasitelerRequest({ year, oncekiYil }))
    )
  );

  constructor(private actions$: Actions, private service: KapasitelerService) {}
}
