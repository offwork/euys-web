import { Injectable } from '@angular/core';
import { KtAtAsitlemeTlv } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1209Actions from './kt-1209.actions';
import * as Kt1209Selectors from './kt-1209.selectors';

@Injectable()
export class Kt1209Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1209Selectors.getKt1209Loaded));
  data$ = this.store.pipe(select(Kt1209Selectors.getKt1209Data));
  defaultRow$ = this.store.pipe(select(Kt1209Selectors.getKt1209DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1209Actions.init());
  }

  save(ktAt1AsitlemeTlv: KtAtAsitlemeTlv) {
    this.store.dispatch(Kt1209Actions.save({ ktAt1AsitlemeTlv }));
  }
}
