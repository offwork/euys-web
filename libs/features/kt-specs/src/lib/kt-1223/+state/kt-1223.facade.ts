import { Injectable } from '@angular/core';
import { KtAtDemirAlasimVeGaFirini } from '@euys/api-interfaces';
import { select, Store, Action } from '@ngrx/store';

import * as Kt1223Actions from './kt-1223.actions';
import * as Kt1223Selectors from './kt-1223.selectors';

@Injectable()
export class Kt1223Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
   loaded$ = this.store.pipe(select(Kt1223Selectors.getKt1223Loaded));
   data$ = this.store.pipe(select(Kt1223Selectors.getKt1223Data));
   defaultRow$ = this.store.pipe(select(Kt1223Selectors.getKt1223DefaultRow));
 
  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1223Actions.init());
  }
  
  save(KtAtDemirAlasimVeGaFirini: KtAtDemirAlasimVeGaFirini) {
    this.store.dispatch(Kt1223Actions.save({ KtAtDemirAlasimVeGaFirini }));
  }
}
