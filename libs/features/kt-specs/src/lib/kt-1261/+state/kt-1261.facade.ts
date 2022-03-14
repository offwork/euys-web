import { Injectable } from '@angular/core';
import { KtAtYuzeyDuzgunluguIUnit } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1261Actions from './kt-1261.actions';
import * as Kt1261Selectors from './kt-1261.selectors';

@Injectable()
export class Kt1261Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1261Selectors.getKt1261Loaded));
  data$ = this.store.pipe(select(Kt1261Selectors.getKt1261Data));
  defaultRow$ = this.store.pipe(select(Kt1261Selectors.getKt1261DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1261Actions.init());
  }

  save(ktAtYuzeyDuzgunluguIUnit: KtAtYuzeyDuzgunluguIUnit) {
    this.store.dispatch(Kt1261Actions.save({ ktAtYuzeyDuzgunluguIUnit }));
  }
}
