import { Injectable } from '@angular/core';
import { KtAtEnineKalinlikVeIkiKenarFarklari } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1226Actions from './kt-1226.actions';
import * as Kt1226Selectors from './kt-1226.selectors';

@Injectable()
export class Kt1226Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  
  loaded$ = this.store.pipe(select(Kt1226Selectors.getKt1226Loaded));
  data$ = this.store.pipe(select(Kt1226Selectors.getKt1226Data));
  defaultRow$ = this.store.pipe(select(Kt1226Selectors.getKt1226DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1226Actions.init());
  }

  save(KtAtEnineKalinlikVeIkiKenarFarklari: KtAtEnineKalinlikVeIkiKenarFarklari) {
    this.store.dispatch(Kt1226Actions.save({ KtAtEnineKalinlikVeIkiKenarFarklari }));
  }
}
