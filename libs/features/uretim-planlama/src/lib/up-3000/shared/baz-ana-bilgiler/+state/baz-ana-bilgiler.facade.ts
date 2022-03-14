import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as actions from './baz-ana-bilgiler.actions';
import * as selectors from './baz-ana-bilgiler.selectors';

@Injectable()
export class BazAnaBilgilerFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  bazAnaBilgiList$ = this.store.pipe(select(selectors.getList));
  loading$ = this.store.pipe(select(selectors.getLoading));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(actions.init());
  }

  filter(year: string) {
    this.store.dispatch(actions.filter({ year }));
  }
}
