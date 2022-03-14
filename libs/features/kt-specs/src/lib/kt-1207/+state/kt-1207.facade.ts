import { Injectable } from '@angular/core';
import { KtAtAmbalajPaket } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1207Actions from './kt-1207.actions';
import * as Kt1207Selectors from './kt-1207.selectors';

@Injectable()
export class Kt1207Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1207Selectors.getKt1207Loaded));
  data$ = this.store.pipe(select(Kt1207Selectors.getKt1207Data));
  defaultRow$ = this.store.pipe(select(Kt1207Selectors.getKt1207DefaultRow));


  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1207Actions.init());
  }
  save(ktAtAmbalajPaket: KtAtAmbalajPaket) {
    this.store.dispatch(Kt1207Actions.save({ ktAtAmbalajPaket }));
  }
}
