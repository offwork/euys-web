import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as CuTarihGecikmeAnaliziActions from './cu-tarih-gecikme-analizi.actions';
import * as CuTarihGecikmeAnaliziSelectors from './cu-tarih-gecikme-analizi.selectors';

@Injectable()
export class CuTarihGecikmeAnaliziFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CuTarihGecikmeAnaliziSelectors.getCuTarihGecikmeAnaliziLoaded));
  allTarihGecikmeAnalizi$ = this.store.pipe(select(CuTarihGecikmeAnaliziSelectors.getAllCuTarihGecikmeAnalizi));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(CuTarihGecikmeAnaliziActions.init());
  }
  load(baslangic: Date, bitis: Date) {
    this.store.dispatch(
      CuTarihGecikmeAnaliziActions.loadCuTarihGecikmeAnalizi({
        baslangic,
        bitis,
      })
    );
  }
}
