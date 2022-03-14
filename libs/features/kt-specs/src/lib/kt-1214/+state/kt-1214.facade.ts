import { Injectable } from '@angular/core';
import { KtAtBobinDilUcu } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1214Actions from './kt-1214.actions';
import * as Kt1214Selectors from './kt-1214.selectors';

@Injectable()
export class Kt1214Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1214Selectors.getKt1214Loaded));
  data$ = this.store.pipe(select(Kt1214Selectors.getKt1214Data));
  defaultRow$ = this.store.pipe(select(Kt1214Selectors.getKt1214DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1214Actions.init());
  }

  save(ktAtBobinDilUcu: KtAtBobinDilUcu) {
    this.store.dispatch(Kt1214Actions.save({ ktAtBobinDilUcu }));
  }
}
