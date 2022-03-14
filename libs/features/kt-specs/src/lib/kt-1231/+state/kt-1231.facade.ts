import { Injectable } from '@angular/core';
import { KtAtIiTenekeKalayErgitme } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1231Actions from './kt-1231.actions';
import * as Kt1231Selectors from './kt-1231.selectors';

@Injectable()
export class Kt1231Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1231Selectors.getKt1231Loaded));
  data$ = this.store.pipe(select(Kt1231Selectors.getKt1231Data));
  defaultRow$ = this.store.pipe(select(Kt1231Selectors.getKt1231DefaultRow));
  
  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1231Actions.init());
  }
  save(ktAtIiTenekeKalayErgitme: KtAtIiTenekeKalayErgitme) {
    this.store.dispatch(Kt1231Actions.save({ ktAtIiTenekeKalayErgitme }));
  }
}
