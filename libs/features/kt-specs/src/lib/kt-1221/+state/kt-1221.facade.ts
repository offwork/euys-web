import { Injectable } from '@angular/core';
import { KtAtCgl12Temizleme } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1221Actions from './kt-1221.actions';
import * as Kt1221Selectors from './kt-1221.selectors';

@Injectable()
export class Kt1221Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1221Selectors.getKt1221Loaded));
  data$ = this.store.pipe(select(Kt1221Selectors.getKt1221Data));
  defaultRow$ = this.store.pipe(select(Kt1221Selectors.getKt1221DefaultRow));
  
  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1221Actions.init());
  }
  save(ktAtCgl12Temizleme: KtAtCgl12Temizleme) {
    this.store.dispatch(Kt1221Actions.save({ ktAtCgl12Temizleme }));
  }
}
