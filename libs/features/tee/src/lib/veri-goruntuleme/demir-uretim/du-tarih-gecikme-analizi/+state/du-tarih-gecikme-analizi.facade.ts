import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as DuTarihGecikmeAnaliziActions from './du-tarih-gecikme-analizi.actions';
import * as DuTarihGecikmeAnaliziSelectors from './du-tarih-gecikme-analizi.selectors';

@Injectable()
export class DuTarihGecikmeAnaliziFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(DuTarihGecikmeAnaliziSelectors.getDuTarihGecikmeAnaliziLoaded));
  allTarihGecikmeAnalizi$ = this.store.pipe(select(DuTarihGecikmeAnaliziSelectors.getAllDuTarihGecikmeAnalizi));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(DuTarihGecikmeAnaliziActions.init());
  }

  load(baslangic: Date, bitis: Date) {
    this.store.dispatch(DuTarihGecikmeAnaliziActions.loadDuTarihGecikmeAnalizi({ baslangic, bitis }));
  }
}
