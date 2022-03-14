import { Injectable } from '@angular/core';
import { KtAtMarkalama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1244Actions from './kt-1244.actions';
import * as Kt1244Selectors from './kt-1244.selectors';

@Injectable()
export class Kt1244Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1244Selectors.getKt1244Loaded));
  data$ = this.store.pipe(select(Kt1244Selectors.getKt1244Data));
  defaultRow$ = this.store.pipe(select(Kt1244Selectors.getKt1244DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1244Actions.init());
  }
  save(ktAtMarkalama: KtAtMarkalama){
    this.store.dispatch(Kt1244Actions.save({ktAtMarkalama}));
  }
}
