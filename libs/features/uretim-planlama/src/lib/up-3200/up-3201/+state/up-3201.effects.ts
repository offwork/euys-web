import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3201Service } from '../services/up-3201.service';

import * as Up3201Actions from './up-3201.actions';

@Injectable()
export class Up3201Effects {
  loadUpHatVerimList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3201Actions.loadUpHatVerimList),
      switchMap(() =>
        this.service.getHatVerimList().pipe(
          map(body =>
            Up3201Actions.loadUpHatVerimListSuccess({
              upHatVerimList: body,
            })
          ),
          catchError(error =>
            observableOf(Up3201Actions.loadUpHatVerimListFailure({ error }))
          )
        )
      )
    )
  );

  saveHatVerim$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3201Actions.saveHatVerim),
      switchMap(action =>
        this.service.saveHatVerim(action.upHatVerim).pipe(
          map(body => Up3201Actions.saveHatVerimSuccess({ upHatVerim: body })),
          catchError(error =>
            observableOf(Up3201Actions.saveHatVerimFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3201Service
  ) {}
}
