import { Injectable } from '@angular/core';
import { KtCgl12Tavlama2 } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1220Actions from './kt-1220.actions';
import * as Kt1220Selectors from './kt-1220.selectors';

@Injectable()
export class Kt1220Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1220Selectors.getKt1220Loaded));
  data$ = this.store.pipe(select(Kt1220Selectors.getKt1220Data));
  defaultRow$ = this.store.pipe(select(Kt1220Selectors.getKt1220DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1220Actions.init());
  }

  save(ktCgl12Tavlama2: KtCgl12Tavlama2) {
    this.store.dispatch(Kt1220Actions.save({ ktCgl12Tavlama2 }));
  }
}
