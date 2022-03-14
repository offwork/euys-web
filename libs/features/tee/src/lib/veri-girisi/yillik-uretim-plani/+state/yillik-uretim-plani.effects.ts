import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { YillikUretimPlaniService } from '../services/yillik-uretim-plani.service';
import * as YillikUretimPlaniActions from './yillik-uretim-plani.actions';

@Injectable()
export class YillikUretimPlaniEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(YillikUretimPlaniActions.loadPlanlar),
      switchMap((action) =>
        this.service.getPlanlar(action.yil).pipe(
          map(({ data }) => YillikUretimPlaniActions.loadYillikUretimPlaniSuccess({ yillikUretimPlani: data })),
          catchError((error) => observableOf(YillikUretimPlaniActions.loadYillikUretimPlaniFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: YillikUretimPlaniService) {}
}
