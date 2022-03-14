import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as Ut6114Actions from '../../ut-6114/+state/ut-6114.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { Ut6114Service } from '../services/ut-6114.service';

@Injectable()
export class Ut6114Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6114Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Ut6114Actions.loadUt6114Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut6114Actions.loadUt6114Failure({ error }))
          )
        )
      )
    )
  );

  listeler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6114Actions.loadListelerUt6114),
      switchMap(() =>
        this.service
          .getListeler()
          .pipe(
            map(({ data }) => Ut6114Actions.loadListelerUt6114Success({ data }))
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Ut6114Service
  ) {}
}
