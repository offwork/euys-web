import { Injectable } from '@angular/core';
import { PfdmKalinlikCap } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Pfdm3101Actions from './pfdm-3101.actions';
import * as Pfdm3101Selectors from './pfdm-3101.selectors';

@Injectable()
export class Pfdm3101Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Pfdm3101Selectors.getPfdm3101Loaded));
  data$ = this.store.pipe(select(Pfdm3101Selectors.getPfdm3101Data));
  defaultRow$ = this.store.pipe(
    select(Pfdm3101Selectors.getPfdm3101DefaultRow)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Pfdm3101Actions.init());
  }

  save(pfdmKalinlikCap: PfdmKalinlikCap) {
    this.store.dispatch(Pfdm3101Actions.save({ pfdmKalinlikCap }));
  }
  delete(pfdmKalinlikCap: PfdmKalinlikCap) {
    this.store.dispatch(Pfdm3101Actions.deletePfdm({ pfdmKalinlikCap }));
  }
}
