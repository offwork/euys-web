import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3021Service } from '../services/up-3021.service';
import * as actions from './up-3021.actions';

@Injectable()
export class Up3021Effects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.load),
      switchMap(action =>
        this.service.load(action.yupGunlukPlanBilgileriModel).pipe(
          map(({ body }) => actions.loadSuccess({ data: body })),
          catchError(error => observableOf(actions.loadFailure({ error })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3021Service
  ) {}
}
