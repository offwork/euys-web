import { Injectable } from '@angular/core';
import { KtCalHattiYuzdeUzama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1217Actions from './kt-1217.actions';
import * as Kt1217Selectors from './kt-1217.selectors';

@Injectable()
export class Kt1217Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1217Selectors.getKt1217Loaded));
  allKt1217$ = this.store.pipe(select(Kt1217Selectors.getAllKt1217));
  defaultRow$ = this.store.pipe(select(Kt1217Selectors.getKt1217DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1217Actions.init());
  }

  saveOrUpdate(calYuzdeUzama: KtCalHattiYuzdeUzama) {
    calYuzdeUzama.id
      ? this.store.dispatch(Kt1217Actions.updateKt1217({ calYuzdeUzama }))
      : this.store.dispatch(Kt1217Actions.saveKt1217({ calYuzdeUzama }));
  }
}
