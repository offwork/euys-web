import { Injectable } from '@angular/core';
import { KtCgl12HavaSogutma } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1218Actions from './kt-1218.actions';
import * as Kt1218Selectors from './kt-1218.selectors';

@Injectable()
export class Kt1218Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1218Selectors.getKt1218Loaded));
  data$ = this.store.pipe(select(Kt1218Selectors.getKt1218Data));
  defaultRow$ = this.store.pipe(select(Kt1218Selectors.getKt1218DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1218Actions.init());
  }

  save(KtCgl12HavaSogutma: KtCgl12HavaSogutma) {
    this.store.dispatch(Kt1218Actions.save({ KtCgl12HavaSogutma }));
  }
}
