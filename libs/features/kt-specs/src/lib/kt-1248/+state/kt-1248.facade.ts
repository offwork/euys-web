import { Injectable } from '@angular/core';
import { KtAtSleeveKalinlik } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1248Actions from './kt-1248.actions';
import * as Kt1248Selectors from './kt-1248.selectors';

@Injectable()
export class Kt1248Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1248Selectors.getKt1248Loaded));
  data$ = this.store.pipe(select(Kt1248Selectors.getKt1248Data));
  defaultRow$ = this.store.pipe(select(Kt1248Selectors.getKt1248DefaultRow));


  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1248Actions.init());
  }
  save(ktAtSleeveKalinlik: KtAtSleeveKalinlik) {
    this.store.dispatch(Kt1248Actions.save({ ktAtSleeveKalinlik }));
  }
}
