import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3244Service } from '../services/up-3244.service';
import * as Up3244Actions from './up-3244.actions';

@Injectable()
export class Up3244Effects {
  loadKapasiteRaporGrubu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3244Actions.loadImalatLotunHikayesiList),
      switchMap(({ imalatLotNo, islemTipi }) =>
        this.service.getImalatLotunHikayesiList(imalatLotNo, islemTipi).pipe(
          map(imalatLotunHikayesiList =>
            Up3244Actions.loadImalatLotunHikayesiListSuccess({
              imalatLotunHikayesiList,
            })
          ),
          catchError(error =>
            observableOf(
              Up3244Actions.loadImalatLotunHikayesiListFailure({ error })
            )
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3244Service
  ) {}
}
