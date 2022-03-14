import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AylikUretimPlaniService } from '../services/aylik-uretim-plani.service';
import * as actions from './aylik-uretim-plani.actions';

@Injectable()
export class AylikUretimPlaniEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.load),
      switchMap(action =>
        this.service.load(action.ay, action.yil).pipe(
          map(yupAylikAnaModel => actions.success({ yupAylikAnaModel })),
          catchError(error => observableOf(actions.fail({ error })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: AylikUretimPlaniService
  ) {}
}
