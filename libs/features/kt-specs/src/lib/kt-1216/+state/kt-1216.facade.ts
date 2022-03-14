import { Injectable } from '@angular/core';
import { KtAtCalHattiTavlama } from '@euys/api-interfaces';
import { select, Store, Action } from '@ngrx/store';
import * as Kt1216Actions from './kt-1216.actions';
import * as Kt1216Feature from './kt-1216.reducer';
import * as Kt1216Selectors from './kt-1216.selectors';

@Injectable()
export class Kt1216Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1216Selectors.getKt1216Loaded));
  data$ = this.store.pipe(select(Kt1216Selectors.getKt1216Data));
  defaultRow$ = this.store.pipe(select(Kt1216Selectors.getKt1216DefaultRow));
  
  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1216Actions.init());
  }
  save(ktAtCalHattiTavlama: KtAtCalHattiTavlama) {
    this.store.dispatch(Kt1216Actions.save({ ktAtCalHattiTavlama }));
  }
}
