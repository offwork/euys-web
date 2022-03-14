import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3010Service } from '../services/up-3010.service';
import * as actions from './up-3010.actions';

@Injectable()
export class Up3010Effects {
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.save),
      switchMap(action =>
        this.service.save(action.yupAylikAnaModel).pipe(
          map(() => actions.success()),
          catchError(() => observableOf(actions.fail()))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3010Service
  ) {}
}
