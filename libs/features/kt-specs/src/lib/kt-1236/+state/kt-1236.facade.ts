import { Injectable } from '@angular/core';
import { KtAtKalinlikSapmaAraligi } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1236Actions from './kt-1236.actions';
import * as Kt1236Selectors from './kt-1236.selectors';

@Injectable()
export class Kt1236Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1236Selectors.getKt1236Loaded));
  data$ = this.store.pipe(select(Kt1236Selectors.getKt1236Data));
  defaultRow$ = this.store.pipe(select(Kt1236Selectors.getKt1236DefaultRow));


  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1236Actions.init());
  }
  save(ktAtKalinlikSapmaAraligi: KtAtKalinlikSapmaAraligi) {
    this.store.dispatch(Kt1236Actions.save({ ktAtKalinlikSapmaAraligi }));
  }
}
