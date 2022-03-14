import { Injectable } from '@angular/core';
import { KtAtCgl12TempYuzdeUzama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1222Actions from './kt-1222.actions';
import * as Kt1222Selectors from './kt-1222.selectors';

@Injectable()
export class Kt1222Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1222Selectors.getKt1222Loaded));
  data$ = this.store.pipe(select(Kt1222Selectors.getKt1222Data));
  defaultRow$ = this.store.pipe(select(Kt1222Selectors.getKt1222DefaultRow));
  
  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1222Actions.init());
  }
  save(ktAtCgl12TempYuzdeUzama: KtAtCgl12TempYuzdeUzama) {
    this.store.dispatch(Kt1222Actions.save({ ktAtCgl12TempYuzdeUzama }));
  }
}
