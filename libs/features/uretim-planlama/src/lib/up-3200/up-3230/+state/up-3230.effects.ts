import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3230Service } from '../services/up-3230.service';
import * as Up3230Actions from './up-3230.actions';

@Injectable()
export class Up3230Effects {
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3230Actions.update),
      switchMap(({ updateList }) =>
        this.service.updateStatu(updateList).pipe(
          map(failedUpdateList =>
            Up3230Actions.updateSuccess({ failedUpdateList })
          ),
          catchError(error =>
            observableOf(Up3230Actions.updateFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3230Service
  ) {}
}
