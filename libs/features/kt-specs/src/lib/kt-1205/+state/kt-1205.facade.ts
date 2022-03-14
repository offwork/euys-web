import { Injectable } from '@angular/core';
import { KtAtAgirlik } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1205Actions from './kt-1205.actions';
import * as Kt1205Selectors from './kt-1205.selectors';

@Injectable()
export class Kt1205Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1205Selectors.getKt1205Loaded));
  data$ = this.store.pipe(select(Kt1205Selectors.getKt1205Data));
  defaultRow$ = this.store.pipe(select(Kt1205Selectors.getKt1205DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1205Actions.init());
  }

  save(ktAtAgirlik: KtAtAgirlik) {
    this.store.dispatch(Kt1205Actions.save({ ktAtAgirlik }));
  }
}
