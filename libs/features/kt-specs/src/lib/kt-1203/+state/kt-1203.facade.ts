import { Injectable } from '@angular/core';
import { KtAt2SckHadIkmalSicakl } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1203Actions from './kt-1203.actions';
import * as Kt1203Selectors from './kt-1203.selectors';

@Injectable()
export class Kt1203Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1203Selectors.getKt1203Loaded));
  data$ = this.store.pipe(select(Kt1203Selectors.getKt1203Data));
  defaultRow$ = this.store.pipe(select(Kt1203Selectors.getKt1203DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1203Actions.init());
  }

  save(KtAt2SckHadIkmalSicakl: KtAt2SckHadIkmalSicakl) {
    this.store.dispatch(Kt1203Actions.save({ KtAt2SckHadIkmalSicakl }));
  }
}
