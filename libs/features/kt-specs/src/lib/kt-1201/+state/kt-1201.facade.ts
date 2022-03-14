import { Injectable } from '@angular/core';
import { KtAt1SckHadIkmalSicakl } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1201Actions from './kt-1201.actions';
import * as Kt1201Selectors from './kt-1201.selectors';

@Injectable()
export class Kt1201Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1201Selectors.getKt1201Loaded));
  data$ = this.store.pipe(select(Kt1201Selectors.getKt1201Data));
  defaultRow$ = this.store.pipe(select(Kt1201Selectors.getKt1201DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1201Actions.init());
  }

  save(ktAt1SckHadIkmalSicakl: KtAt1SckHadIkmalSicakl) {
    this.store.dispatch(Kt1201Actions.save({ ktAt1SckHadIkmalSicakl }));
  }
}
