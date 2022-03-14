import { Injectable } from '@angular/core';
import { PfdmYuzeyKaplama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Pfdm3103Actions from './pfdm-3103.actions';
import * as Pfdm3103Selectors from './pfdm-3103.selectors';

@Injectable()
export class Pfdm3103Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Pfdm3103Selectors.getPfdm3103Loaded));
  data$ = this.store.pipe(select(Pfdm3103Selectors.getPfdm3103Data));
  defaultRow$ = this.store.pipe(
    select(Pfdm3103Selectors.getPfdm3103DefaultRow)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Pfdm3103Actions.init());
  }

  save(pfdmYuzeyKaplama: PfdmYuzeyKaplama) {
    this.store.dispatch(Pfdm3103Actions.save({ pfdmYuzeyKaplama }));
  }
  delete(pfdmYuzeyKaplama: PfdmYuzeyKaplama) {
    this.store.dispatch(Pfdm3103Actions.deletePfdm({ pfdmYuzeyKaplama }));
  }
}
