import { Injectable } from '@angular/core';
import { PfdmKaliteGrup } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Pfdm3104Actions from './pfdm-3104.actions';
import * as Pfdm3104Selectors from './pfdm-3104.selectors';

@Injectable()
export class Pfdm3104Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Pfdm3104Selectors.getPfdm3104Loaded));
  data$ = this.store.pipe(select(Pfdm3104Selectors.getPfdm3104Data));
  defaultRow$ = this.store.pipe(
    select(Pfdm3104Selectors.getPfdm3104DefaultRow)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Pfdm3104Actions.init());
  }

  save(pfdmKaliteGrup: PfdmKaliteGrup) {
    this.store.dispatch(Pfdm3104Actions.save({ pfdmKaliteGrup }));
  }
  delete(pfdmKaliteGrup: PfdmKaliteGrup) {
    this.store.dispatch(Pfdm3104Actions.deletePfdm({ pfdmKaliteGrup }));
  }
}
