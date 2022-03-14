import { Injectable } from '@angular/core';
import { KtAtOzelAgirlik } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1246Actions from './kt-1246.actions';
import * as Kt1246Selectors from './kt-1246.selectors';

@Injectable()
export class Kt1246Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1246Selectors.getKt1246Loaded));
  data$ = this.store.pipe(select(Kt1246Selectors.getKt1246Data));
  defaultRow$ = this.store.pipe(select(Kt1246Selectors.getKt1246DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1246Actions.init());
  }

  save(ktAtOzelAgirlik: KtAtOzelAgirlik) {
    this.store.dispatch(Kt1246Actions.save({ ktAtOzelAgirlik }));
  }
}
