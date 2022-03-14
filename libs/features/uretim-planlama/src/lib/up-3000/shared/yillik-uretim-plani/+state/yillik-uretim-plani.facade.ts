import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as actions from './yillik-uretim-plani.actions';
import * as selectors from './yillik-uretim-plani.selectors';

@Injectable()
export class YillikUretimPlaniFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(selectors.getLoaded));
  ozet$ = this.store.pipe(select(selectors.getOzet));
  urunBazindaList$ = this.store.pipe(select(selectors.getUrunBazindaList));
  kapasiteBazindaList$ = this.store.pipe(
    select(selectors.getKapasiteBazindaList)
  );
  rumuzBazindaList$ = this.store.pipe(select(selectors.getRumuzBazindaList));
  uretimHedefleriList$ = this.store.pipe(
    select(selectors.getUretimHedefleriList)
  );
  planliDuruslar$ = this.store.pipe(select(selectors.getPlanliDuruslar));
  planliDuruslarTesisAdlari$ = this.store.pipe(
    select(selectors.getPlanliDuruslarTesisAdlari)
  );

  constructor(private readonly store: Store) {}

  load(year: string, id: string, idYupBazAna: string) {
    this.store.dispatch(actions.load({ year, id, idYupBazAna }));
  }
}
