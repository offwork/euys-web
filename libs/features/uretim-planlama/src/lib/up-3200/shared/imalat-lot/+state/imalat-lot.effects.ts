import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ImalatLotService } from '../services/imalat-lot.service';
import * as ImalatLotActions from './imalat-lot.actions';

@Injectable()
export class ImalatLotEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ImalatLotActions.loadImalatLotList),
      switchMap(({ imalatLotSorguModel }) =>
        (imalatLotSorguModel.statu
          ? this.service.getImalatLotListWithStatu(imalatLotSorguModel)
          : this.service.getImalatLotListWithTedarikTipi(imalatLotSorguModel)
        ).pipe(
          map(imalatLotList =>
            ImalatLotActions.loadImalatLotListSuccess({ imalatLotList })
          ),
          catchError(error =>
            observableOf(ImalatLotActions.loadImalatLotListFailure({ error }))
          )
        )
      )
    )
  );

  loadTedarikTipiList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ImalatLotActions.loadTedarikTipiList),
      switchMap(() =>
        this.service.getTedarikTipiList().pipe(
          map(tedarikTipiList =>
            ImalatLotActions.loadTedarikTipiListSuccess({ tedarikTipiList })
          ),
          catchError(error =>
            observableOf(ImalatLotActions.loadTedarikTipiListFailure({ error }))
          )
        )
      )
    )
  );

  loadStatuList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ImalatLotActions.loadStatuList),
      switchMap(() =>
        this.service.getStatuList().pipe(
          map(statuList =>
            ImalatLotActions.loadStatuListSuccess({ statuList })
          ),
          catchError(error =>
            observableOf(ImalatLotActions.loadStatuListFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: ImalatLotService
  ) {}
}
