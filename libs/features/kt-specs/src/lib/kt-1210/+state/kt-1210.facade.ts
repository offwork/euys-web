import { Injectable } from '@angular/core';
import { KtAtDurulama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1210Actions from './kt-1210.actions';
import * as Kt1210Selectors from './kt-1210.selectors';

@Injectable()
export class Kt1210Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1210Selectors.getKt1210Loaded));
  data$ = this.store.pipe(select(Kt1210Selectors.getKt1210Data));
  defaultRow$ = this.store.pipe(select(Kt1210Selectors.getKt1210DefaultRow));


  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1210Actions.init());
  }
  save(ktAtDurulama: KtAtDurulama) {
    this.store.dispatch(Kt1210Actions.save({ ktAtDurulama }));
  }
}
