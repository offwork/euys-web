import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3020Service } from '../services/up-3020.service';
import * as actions from './up-3020.actions';

@Injectable()
export class Up3020Effects {
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.save),
      switchMap(action =>
        this.service.save(action.yupGunlukPlanBilgileriModel).pipe(
          map(({ islemSonucModel, yupGunlukPlanBilgileriModel }) =>
            actions.saveSuccess({
              dublicate: action.yupGunlukPlanBilgileriModel.id
                ? false
                : !islemSonucModel?.islemDurum,
              updateRecord: yupGunlukPlanBilgileriModel,
            })
          ),
          catchError(() => observableOf(actions.saveFailure()))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3020Service
  ) {}
}
