import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as actions from './up-3002.actions';
import * as selectors from './up-3002.selectors';

@Injectable()
export class Up3002Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  planliDuruslar$ = this.store.pipe(select(selectors.getPlanliDuruslar));
  planliDuruslarLoading$ = this.store.pipe(
    select(selectors.getPlanliDuruslarLoading)
  );
  planliDuruslarTesisAdlari$ = this.store.pipe(
    select(selectors.getPlanliDuruslarTesisAdlari)
  );

  uretimHatlari$ = this.store.pipe(select(selectors.getUretimHedefleri));
  uretimHatlariLoading$ = this.store.pipe(
    select(selectors.getUretimHedefleriLoading)
  );
  uretimHatlariTesisAdlari$ = this.store.pipe(
    select(selectors.getUretimHedefleriTesisAdlari)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(actions.init());
  }

  getPlanliDuruslar(id: string) {
    this.store.dispatch(actions.loadPlanliDuruslar({ id }));
  }

  getUretimHedefleri(id: string) {
    this.store.dispatch(actions.loadUretimHedefleri({ id }));
  }
}
