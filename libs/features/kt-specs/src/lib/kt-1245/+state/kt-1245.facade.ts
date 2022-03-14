import { Injectable } from '@angular/core';
import { KtAtNormalize } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1245Actions from './kt-1245.actions';
import * as Kt1245Selectors from './kt-1245.selectors';

@Injectable()
export class Kt1245Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1245Selectors.getKt1245Loaded));
  data$ = this.store.pipe(select(Kt1245Selectors.getKt1245Data));
  defaultRow$ = this.store.pipe(select(Kt1245Selectors.getKt1245DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1245Actions.init());
  }
  save(ktAtNormalize: KtAtNormalize){
    this.store.dispatch(Kt1245Actions.save({ktAtNormalize}));
  }
}
