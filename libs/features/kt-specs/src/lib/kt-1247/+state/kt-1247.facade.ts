import { Injectable } from '@angular/core';
import { KtAtSlabYuzeyTemizleme } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1247Actions from './kt-1247.actions';
import * as Kt1247Selectors from './kt-1247.selectors';

@Injectable()
export class Kt1247Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1247Selectors.getKt1247Loaded));
  data$ = this.store.pipe(select(Kt1247Selectors.getKt1247Data));
  defaultRow$ = this.store.pipe(select(Kt1247Selectors.getKt1247DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1247Actions.init());
  }
  save(ktAtSlabYuzeyTemizleme: KtAtSlabYuzeyTemizleme) {
    this.store.dispatch(Kt1247Actions.save({ ktAtSlabYuzeyTemizleme }));
  }
}
