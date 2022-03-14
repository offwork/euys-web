import { Injectable } from '@angular/core';
import { KtAt1SckHadSarilmaSicakl } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1202Actions from './kt-1202.actions';
import * as Kt1202Selectors from './kt-1202.selectors';

@Injectable()
export class Kt1202Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1202Selectors.getKt1202Loaded));
  data$ = this.store.pipe(select(Kt1202Selectors.getKt1202Data));
  defaultRow$ = this.store.pipe(select(Kt1202Selectors.getKt1202DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1202Actions.init());
  }

  save(ktAt1SckHadSarilmaSicakl: KtAt1SckHadSarilmaSicakl) {
    this.store.dispatch(Kt1202Actions.save({ ktAt1SckHadSarilmaSicakl }));
  }
}
