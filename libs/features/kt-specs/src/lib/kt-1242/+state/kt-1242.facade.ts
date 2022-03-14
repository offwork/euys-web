import { Injectable } from '@angular/core';
import { KtAtKromKaplamaTfsSo4 } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1242Actions from './kt-1242.actions';
import * as Kt1242Selectors from './kt-1242.selectors';

@Injectable()
export class Kt1242Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1242Selectors.getKt1242Loaded));
  data$ = this.store.pipe(select(Kt1242Selectors.getKt1242Data));
  defaultRow$ = this.store.pipe(select(Kt1242Selectors.getKt1242DefaultRow));


  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1242Actions.init());
  }
  save(ktAtKromKaplamaTfsSo4: KtAtKromKaplamaTfsSo4) {
    this.store.dispatch(Kt1242Actions.save({ ktAtKromKaplamaTfsSo4 }));
  }
}
