import { Injectable } from '@angular/core';
import { KtAtIiTenekeKalayKimyasal } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1232Actions from './kt-1232.actions';
import * as Kt1232Selectors from './kt-1232.selectors';

@Injectable()
export class Kt1232Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1232Selectors.getKt1232Loaded));
  data$ = this.store.pipe(select(Kt1232Selectors.getKt1232Data));
  defaultRow$ = this.store.pipe(select(Kt1232Selectors.getKt1232DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1232Actions.init());
  }

  save(ktAtIiTenekeKalayKimyasal: KtAtIiTenekeKalayKimyasal) {
    this.store.dispatch(Kt1232Actions.save({ ktAtIiTenekeKalayKimyasal }));
  }
}
