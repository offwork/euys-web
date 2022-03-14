import { Injectable } from '@angular/core';
import { KtAtYuzeyGorunumu } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1258Actions from './kt-1258.actions';
import * as Kt1258Selectors from './kt-1258.selectors';

@Injectable()
export class Kt1258Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1258Selectors.getKt1258Loaded));
  data$ = this.store.pipe(select(Kt1258Selectors.getKt1258Data));
  tanimPuruzBirimleri$=this.store.pipe(select(Kt1258Selectors.getKt1258TanimPuruzBirimleri));
  tanimYuzeyDurumulari$=this.store.pipe(select(Kt1258Selectors.getKt1258TanimYuzeyDurumulari));
  defaultRow$ = this.store.pipe(select(Kt1258Selectors.getKt1258DefaultRow));


  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1258Actions.init());
  }
  save(ktAtYuzeyGorunumu: KtAtYuzeyGorunumu) {
    this.store.dispatch(Kt1258Actions.save({ ktAtYuzeyGorunumu }));
  }
}
