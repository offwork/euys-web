import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3030Service } from '../services/up-3030.service';
import * as actions from './up-3030.actions';

@Injectable()
export class Up3030Effects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.load),
      switchMap(({ yil, donem, urunGrubu }) =>
        this.service.load(yil, donem, urunGrubu).pipe(
          map(({ upYupBackUpPlanMamulDonemlikModel, islemSonucModel }) =>
            actions.loadSuccess({
              data: upYupBackUpPlanMamulDonemlikModel,
              islemSonucModel,
            })
          ),
          catchError(error => observableOf(actions.loadFailure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.save),
      switchMap(action =>
        this.service.save(action.yupBackUpPlanGenelModel).pipe(
          map(({ yupBackUpPlanGenelModel }) =>
            actions.saveSuccess({ yupBackUpPlanGenelModel })
          ),
          catchError(error => observableOf(actions.loadFailure({ error })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3030Service
  ) {}
}
