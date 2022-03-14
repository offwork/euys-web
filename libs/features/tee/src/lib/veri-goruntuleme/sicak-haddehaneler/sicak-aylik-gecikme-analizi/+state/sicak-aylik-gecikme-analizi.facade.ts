import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as SicakAylikGecikmeAnaliziActions from './sicak-aylik-gecikme-analizi.actions';
import * as SicakAylikGecikmeAnaliziSelectors from './sicak-aylik-gecikme-analizi.selectors';

@Injectable()
export class SicakAylikGecikmeAnaliziFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(SicakAylikGecikmeAnaliziSelectors.getSicakAylikGecikmeAnaliziLoaded));
  allAylikGecikmeAnalizi$ = this.store.pipe(select(SicakAylikGecikmeAnaliziSelectors.getAllSicakAylikGecikmeAnalizi));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(SicakAylikGecikmeAnaliziActions.init());
  }

  getAylikGecikmeAnalizi(yil: number, ay: number) {
    this.store.dispatch(
      SicakAylikGecikmeAnaliziActions.loadSicakAylikGecikmeAnalizi({
        yil,

        ay,
      })
    );
  }
}
