import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as CuAylikGecikmeAnaliziActions from './cu-aylik-gecikme-analizi.actions';
import * as CuAylikGecikmeAnaliziSelectors from './cu-aylik-gecikme-analizi.selectors';

@Injectable()
export class CuAylikGecikmeAnaliziFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CuAylikGecikmeAnaliziSelectors.getCuAylikGecikmeAnaliziLoaded));
  allAylikGecikmeAnalizi$ = this.store.pipe(select(CuAylikGecikmeAnaliziSelectors.getAllCuAylikGecikmeAnalizi));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(CuAylikGecikmeAnaliziActions.init());
  }

  getAylikGecikmeAnalizi(yil: number, ay: number) {
    this.store.dispatch(
      CuAylikGecikmeAnaliziActions.loadCuAylikGecikmeAnaliziByMonth({
        yil,
        ay,
      })
    );
  }
}
