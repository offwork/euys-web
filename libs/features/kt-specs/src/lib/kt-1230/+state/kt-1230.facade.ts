import { Injectable } from '@angular/core';
import { KtAtIiTenekeAsitleme } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1230Actions from './kt-1230.actions';
import * as Kt1230Selectors from './kt-1230.selectors';

@Injectable()
export class Kt1230Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1230Selectors.getKt1230Loaded));
  data$ = this.store.pipe(select(Kt1230Selectors.getKt1230Data));
  defaultRow$ = this.store.pipe(select(Kt1230Selectors.getKt1230DefaultRow));


  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1230Actions.init());
  }
  save(ktAtIiTenekeAsitleme: KtAtIiTenekeAsitleme) {
    this.store.dispatch(Kt1230Actions.save({ ktAtIiTenekeAsitleme }));
  }
}
