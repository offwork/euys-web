import { Injectable } from '@angular/core';
import { KtCgl12Tavlama1 } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1219Actions from './kt-1219.actions';
import * as Kt1219Selectors from './kt-1219.selectors';

@Injectable()
export class Kt1219Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1219Selectors.getKt1219Loaded));
  data$ = this.store.pipe(select(Kt1219Selectors.getKt1219Data));
  defaultRow$ = this.store.pipe(select(Kt1219Selectors.getKt1219DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1219Actions.init());
  }

  save(ktCgl12Tavlama1: KtCgl12Tavlama1) {
    this.store.dispatch(Kt1219Actions.save({ ktCgl12Tavlama1 }));
  }
}
