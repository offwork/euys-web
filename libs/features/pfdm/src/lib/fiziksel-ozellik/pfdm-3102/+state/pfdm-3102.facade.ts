import { Injectable } from '@angular/core';
import { PfdmGenislikAraligi } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Pfdm3102Actions from './pfdm-3102.actions';
import * as Pfdm3102Selectors from './pfdm-3102.selectors';

@Injectable()
export class Pfdm3102Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Pfdm3102Selectors.getPfdm3102Loaded));
  data$ = this.store.pipe(select(Pfdm3102Selectors.getPfdm3102Data));
  defaultRow$ = this.store.pipe(
    select(Pfdm3102Selectors.getPfdm3102DefaultRow)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Pfdm3102Actions.init());
  }

  save(pfdmGenislikAraligi: PfdmGenislikAraligi) {
    this.store.dispatch(Pfdm3102Actions.save({ pfdmGenislikAraligi }));
  }
  delete(pfdmGenislikAraligi: PfdmGenislikAraligi) {
    this.store.dispatch(Pfdm3102Actions.deletePfdm({ pfdmGenislikAraligi }));
  }
}
