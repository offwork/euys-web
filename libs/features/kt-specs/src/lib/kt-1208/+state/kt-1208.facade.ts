import { Injectable } from '@angular/core';
import { KtAtAsitlemeTank } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1208Actions from './kt-1208.actions';
import * as Kt1208Selectors from './kt-1208.selectors';

@Injectable()
export class Kt1208Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1208Selectors.getKt1208Loaded));
  data$ = this.store.pipe(select(Kt1208Selectors.getKt1208Data));
  defaultRow$ = this.store.pipe(select(Kt1208Selectors.getKt1208DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1208Actions.init());
  }

  save(ktAt1AsitlemeTank: KtAtAsitlemeTank) {
    this.store.dispatch(Kt1208Actions.save({ ktAt1AsitlemeTank }));
  }
}
