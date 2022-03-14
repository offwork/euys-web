import { Injectable } from '@angular/core';
import { KtAtBobHazTempYuzdeUzama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1215Actions from './kt-1215.actions';
import * as Kt1215Selectors from './kt-1215.selectors';

@Injectable()
export class Kt1215Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1215Selectors.getKt1215Loaded));
  data$ = this.store.pipe(select(Kt1215Selectors.getKt1215Data));
  defaultRow$ = this.store.pipe(select(Kt1215Selectors.getKt1215DefaultRow));
  
  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1215Actions.init());
  }
  save(ktAtBobHazTempYuzdeUzama: KtAtBobHazTempYuzdeUzama) {
    this.store.dispatch(Kt1215Actions.save({ ktAtBobHazTempYuzdeUzama }));
  }
}
