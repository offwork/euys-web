import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IsgucuGirisService } from '../services/isgucu-giris.service';
import * as IsgucleriActions from './isgucleri.actions';

@Injectable()
export class IsgucleriEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IsgucleriActions.loadIsgucleri),
      switchMap((action) =>
        this.service.getIsGucleri(action.yil).pipe(
          map(({ data }) => IsgucleriActions.loadIsgucleriSuccess({ isgucleri: data })),
          catchError((error) => of(IsgucleriActions.loadIsgucleriFailure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IsgucleriActions.saveIsgucleri),
      switchMap((action) =>
        this.service.saveIsGucleri(action.data).pipe(
          map(({ data }) => IsgucleriActions.saveIsgucleriSuccess({ data })),
          catchError((error) => of(IsgucleriActions.saveIsgucleriFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: IsgucuGirisService) {}
}
