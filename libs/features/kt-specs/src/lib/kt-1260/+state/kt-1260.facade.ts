import { Injectable } from '@angular/core';
import { KtAtTemperMerdaneTipi } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1260Actions from './kt-1260.actions';
import * as Kt1260Selectors from './kt-1260.selectors';

@Injectable()
export class Kt1260Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1260Selectors.getKt1260Loaded));
  data$ = this.store.pipe(select(Kt1260Selectors.getKt1260Data));
  tanimYuzeyDurumulari$ = this.store.pipe(
    select(Kt1260Selectors.getKt1260TanimYuzeyDurumulari)
  );
  defaultRow$ = this.store.pipe(select(Kt1260Selectors.getKt1260DefaultRow));
  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1260Actions.init());
  }

  save(ktAtTemperMerdaneTipi: KtAtTemperMerdaneTipi) {
    this.store.dispatch(Kt1260Actions.save({ ktAtTemperMerdaneTipi }));
  }
}
