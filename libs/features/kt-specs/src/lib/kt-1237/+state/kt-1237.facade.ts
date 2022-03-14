import { Injectable } from '@angular/core';
import { KtAtKenarEgriligi } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1237Actions from './kt-1237.actions';
import * as Kt1237Selectors from './kt-1237.selectors';


@Injectable()
export class Kt1237Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1237Selectors.getKt1237Loaded));
  data$ = this.store.pipe(select(Kt1237Selectors.getKt1237Data));
  defaultRow$ = this.store.pipe(select(Kt1237Selectors.getKt1237DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1237Actions.init());
  }
  save(ktAtKenarEgriligi: KtAtKenarEgriligi) {
    this.store.dispatch(Kt1237Actions.save({ ktAtKenarEgriligi }));
  }
}
