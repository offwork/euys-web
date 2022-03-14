import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3231Service } from '../services/up-3231.service';
import * as Up3231Actions from './up-3231.actions';

@Injectable()
export class Up3231Effects {
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3231Actions.update),
      switchMap(({ updateList }) =>
        this.service.updateTedarikTipi(updateList).pipe(
          map(failedUpdateList =>
            Up3231Actions.updateSuccess({ failedUpdateList })
          ),
          catchError(error =>
            observableOf(Up3231Actions.updateFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3231Service
  ) {}
}
