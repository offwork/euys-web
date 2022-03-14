import { Injectable } from '@angular/core';
import { YupPlanModel } from '@euys/api-interfaces';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3005Service } from '../services/up-3005.service';
import * as actions from './up-3005.actions';

@Injectable()
export class Up3005Effects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.load),
      switchMap(() =>
        this.service.load().pipe(
          map(data => actions.loadSuccess({ data: data as YupPlanModel[] })),
          catchError(() => observableOf(actions.fail()))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3005Service
  ) {}
}
