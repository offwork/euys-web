import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as actions from './aylik-uretim-plani.actions';
import * as selectors from './aylik-uretim-plani.selectors';

@Injectable()
export class AylikUretimPlaniFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loading$ = this.store.pipe(select(selectors.getLoading));
  yupAylikAnaModel$ = this.store.pipe(select(selectors.getYupAylikAnaModel));
  yupAylikUretimPlaniModelList$ = this.store.pipe(
    select(selectors.getYupAylikUretimPlaniModelList)
  );
  yupAylikNihaiMamulModelList$ = this.store.pipe(
    select(selectors.getYupAylikNihaiMamulModelList)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(actions.init());
  }

  load(ay: string, yil: string) {
    this.store.dispatch(actions.load({ ay, yil }));
  }
}
