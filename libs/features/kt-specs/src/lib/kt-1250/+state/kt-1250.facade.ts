import { Injectable } from '@angular/core';
import { KtAtTemperHaddeYuzdeUzama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1250Actions from './kt-1250.actions';
import * as Kt1250Selectors from './kt-1250.selectors';

@Injectable()
export class Kt1250Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1250Selectors.getKt1250Loaded));
  data$ = this.store.pipe(select(Kt1250Selectors.getKt1250Data));
  defaultRow$ = this.store.pipe(select(Kt1250Selectors.getKt1250DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1250Actions.init());
  }
  save(ktAtTemperHaddeYuzdeUzama: KtAtTemperHaddeYuzdeUzama) {
    this.store.dispatch(Kt1250Actions.save({ ktAtTemperHaddeYuzdeUzama }));
  }
}
