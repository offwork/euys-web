import { Injectable } from '@angular/core';
import { KtAtIiTenekeKalayKaplama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1233Actions from './kt-1233.actions';
import * as Kt1233Selectors from './kt-1233.selectors';

@Injectable()
export class Kt1233Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1233Selectors.getKt1233Loaded));
  data$ = this.store.pipe(select(Kt1233Selectors.getKt1233Data));
  defaultRow$ = this.store.pipe(select(Kt1233Selectors.getKt1233DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1233Actions.init());
  }

  save(ktAtIiTenekeKalayKaplama: KtAtIiTenekeKalayKaplama) {
    this.store.dispatch(Kt1233Actions.save({ ktAtIiTenekeKalayKaplama }));
  }
}
