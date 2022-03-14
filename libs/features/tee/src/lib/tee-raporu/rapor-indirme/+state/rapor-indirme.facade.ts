import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as RaporIndirmeActions from './rapor-indirme.actions';
import * as RaporIndirmeSelectors from './rapor-indirme.selectors';

@Injectable()
export class RaporIndirmeFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(RaporIndirmeSelectors.getRaporIndirmeLoaded));
  allRaporIndirme$ = this.store.pipe(select(RaporIndirmeSelectors.getAllRaporIndirme));
  selectedRaporIndirme$ = this.store.pipe(select(RaporIndirmeSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(RaporIndirmeActions.init());
  }
}
