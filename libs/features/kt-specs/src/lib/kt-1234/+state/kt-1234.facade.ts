import { Injectable } from '@angular/core';
import { KtAtIiTenekeTemizleme } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1234Actions from './kt-1234.actions';
import * as Kt1234Selectors from './kt-1234.selectors';

@Injectable()
export class Kt1234Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1234Selectors.getKt1234Loaded));
  data$ = this.store.pipe(select(Kt1234Selectors.getKt1234Data));
  defaultRow$ = this.store.pipe(select(Kt1234Selectors.getKt1234DefaultRow));


  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1234Actions.init());
  }
  save(ktAtIiTenekeTemizleme: KtAtIiTenekeTemizleme) {
    this.store.dispatch(Kt1234Actions.save({ ktAtIiTenekeTemizleme }));
  }
}
