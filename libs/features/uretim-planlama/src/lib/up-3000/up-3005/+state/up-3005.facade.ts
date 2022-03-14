import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as actions from './up-3005.actions';
import * as selectors from './up-3005.selectors';

@Injectable()
export class Up3005Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loading$ = this.store.pipe(select(selectors.getLoading));
  data$ = this.store.pipe(select(selectors.getData));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  load() {
    this.store.dispatch(actions.load());
  }
}
