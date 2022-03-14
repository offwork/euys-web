import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3003Service } from '../services/up-3003.service';
import * as actions from './up-3003.actions';

@Injectable()
export class Up3003Effects {
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.save),
      switchMap(({ yupTaslakAnaModel,file }) =>
        this.service.save(yupTaslakAnaModel,file).pipe(
          map(() => actions.done()),
          catchError(() => observableOf(actions.fail()))
        )
      )
    )
  );
  constructor(
    private readonly actions$: Actions,
    private service: Up3003Service
  ) {}
}
