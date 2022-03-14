import { Injectable } from '@angular/core';
import { KtAtKoseDikligi } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1238Actions from './kt-1238.actions';
import * as Kt1238Selectors from './kt-1238.selectors';

@Injectable()
export class Kt1238Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1238Selectors.getKt1238Loaded));
  data$ = this.store.pipe(select(Kt1238Selectors.getKt1238Data));
  defaultRow$ = this.store.pipe(select(Kt1238Selectors.getKt1238DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1238Actions.init());
  }

  save(ktAtKoseDikligi: KtAtKoseDikligi) {
    this.store.dispatch(Kt1238Actions.save({ ktAtKoseDikligi }));
  }
}
