import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as YillikUretimPlaniActions from './yillik-uretim-plani.actions';
import * as YillikUretimPlaniSelectors from './yillik-uretim-plani.selectors';

@Injectable()
export class YillikUretimPlaniFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(YillikUretimPlaniSelectors.getYillikUretimPlaniLoaded));
  yillikUretimPlani$ = this.store.pipe(select(YillikUretimPlaniSelectors.getYillikUretimPlani));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(YillikUretimPlaniActions.init());
  }

  load(yil: number) {
    this.store.dispatch(YillikUretimPlaniActions.loadPlanlar({ yil }));
  }
}
