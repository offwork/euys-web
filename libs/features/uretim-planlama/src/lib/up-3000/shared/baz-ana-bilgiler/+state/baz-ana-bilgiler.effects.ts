import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BazAnaBilgilerService } from '../services/baz-ana-bilgiler.service';
import * as actions from './baz-ana-bilgiler.actions';

@Injectable()
export class BazAnaBilgilerEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.init),
      switchMap(() =>
        this.service.get().pipe(
          map(data => actions.loadSuccess({ data })),
          catchError(({ error }) =>
            observableOf(actions.loadFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: BazAnaBilgilerService
  ) {}
}
