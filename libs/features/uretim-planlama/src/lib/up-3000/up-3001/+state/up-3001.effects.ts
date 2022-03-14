import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3001Service } from '../services/up-3001.service';
import * as actions from './up-3001.actions';

@Injectable()
export class Up3001Effects {
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.save),
      switchMap(({ yupBazAnaBilgileri, file }) =>
        this.service.save(yupBazAnaBilgileri, file).pipe(
          map(() => actions.done()),
          catchError(() => observableOf(actions.fail()))
        )
      )
    )
  );
  constructor(
    private readonly actions$: Actions,
    private service: Up3001Service
  ) {}
}
