import { Injectable } from '@angular/core';
import { KtAtLevhaHadIkmalSicaklik } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1243Actions from './kt-1243.actions';
import * as Kt1243Selectors from './kt-1243.selectors';

@Injectable()
export class Kt1243Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1243Selectors.getKt1243Loaded));
  data$ = this.store.pipe(select(Kt1243Selectors.getKt1243Data));
  defaultRow$ = this.store.pipe(select(Kt1243Selectors.getKt1243DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1243Actions.init());
  }

  save(ktAtLevhaHadIkmalSicaklik: KtAtLevhaHadIkmalSicaklik) {
    this.store.dispatch(Kt1243Actions.save({ ktAtLevhaHadIkmalSicaklik }));
  }
}
