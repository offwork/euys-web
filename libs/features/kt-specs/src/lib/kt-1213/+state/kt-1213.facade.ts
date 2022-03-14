import { Injectable } from '@angular/core';
import { KtAtBobinBalikKuyrugu } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1213Actions from './kt-1213.actions';
import * as Kt1213Selectors from './kt-1213.selectors';

@Injectable()
export class Kt1213Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1213Selectors.getKt1213Loaded));
  data$ = this.store.pipe(select(Kt1213Selectors.getKt1213Data));
  defaultRow$ = this.store.pipe(select(Kt1213Selectors.getKt1213DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1213Actions.init());
  }

  save(ktAtBobinBalikKuyrugu: KtAtBobinBalikKuyrugu) {
    this.store.dispatch(Kt1213Actions.save({ ktAtBobinBalikKuyrugu }));
  }
}
