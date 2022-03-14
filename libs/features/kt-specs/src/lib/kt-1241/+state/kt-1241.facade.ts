import { Injectable } from '@angular/core';
import { KtAtKromKaplamaTfsFlor } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1241Actions from './kt-1241.actions';
import * as Kt1241Selectors from './kt-1241.selectors';

@Injectable()
export class Kt1241Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1241Selectors.getKt1241Loaded));
  data$ = this.store.pipe(select(Kt1241Selectors.getKt1241Data));
  defaultRow$ = this.store.pipe(select(Kt1241Selectors.getKt1241DefaultRow));


  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1241Actions.init());
  }
  save(ktAtKromKaplamaTfsFlor: KtAtKromKaplamaTfsFlor) {
    this.store.dispatch(Kt1241Actions.save({ ktAtKromKaplamaTfsFlor }));
  }
}
