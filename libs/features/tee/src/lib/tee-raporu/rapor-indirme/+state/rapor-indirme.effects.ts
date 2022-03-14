import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as RaporIndirmeFeature from './rapor-indirme.reducer';
import * as RaporIndirmeActions from './rapor-indirme.actions';

@Injectable()
export class RaporIndirmeEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RaporIndirmeActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return RaporIndirmeActions.loadRaporIndirmeSuccess({ raporIndirme: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return RaporIndirmeActions.loadRaporIndirmeFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
