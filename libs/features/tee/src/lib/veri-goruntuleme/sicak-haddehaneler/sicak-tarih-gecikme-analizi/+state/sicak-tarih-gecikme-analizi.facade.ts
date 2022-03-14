import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as SicakTarihGecikmeAnaliziActions from './sicak-tarih-gecikme-analizi.actions';
import * as SicakTarihGecikmeAnaliziSelectors from './sicak-tarih-gecikme-analizi.selectors';

@Injectable()
export class SicakTarihGecikmeAnaliziFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(SicakTarihGecikmeAnaliziSelectors.getSicakTarihGecikmeAnaliziLoaded));
  allTarihGecikmeAnalizi$ = this.store.pipe(select(SicakTarihGecikmeAnaliziSelectors.getAllSicakTarihGecikmeAnalizi));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(SicakTarihGecikmeAnaliziActions.init());
  }

  load(baslangic: Date, bitis: Date) {
    this.store.dispatch(SicakTarihGecikmeAnaliziActions.loadSicakTarihGecikmeAnalizi({ baslangic, bitis }));
  }
}
