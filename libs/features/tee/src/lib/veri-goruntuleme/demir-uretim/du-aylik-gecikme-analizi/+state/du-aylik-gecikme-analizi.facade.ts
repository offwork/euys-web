import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as DuAylikGecikmeAnaliziActions from './du-aylik-gecikme-analizi.actions';
import * as DuAylikGecikmeAnaliziSelectors from './du-aylik-gecikme-analizi.selectors';

@Injectable()
export class DuAylikGecikmeAnaliziFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(DuAylikGecikmeAnaliziSelectors.getDuAylikGecikmeAnaliziLoaded));
  allAylikGecikmeAnalizi$ = this.store.pipe(select(DuAylikGecikmeAnaliziSelectors.getAllDuAylikGecikmeAnalizi));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(DuAylikGecikmeAnaliziActions.init());
  }

  getAylikGecikmeAnalizi(yil: number, ay: number) {
    this.store.dispatch(DuAylikGecikmeAnaliziActions.loadDuAylikGecikmeAnaliziByMonth({ yil, ay }));
  }
}
