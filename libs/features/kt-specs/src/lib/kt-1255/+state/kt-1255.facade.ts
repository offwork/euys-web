import { Injectable } from '@angular/core';
import { KtAtTincalTempYuzdeUzama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1255Actions from './kt-1255.actions';
import * as Kt1255Selectors from './kt-1255.selectors';

@Injectable()
export class Kt1255Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1255Selectors.getKt1255Loaded));
  data$ = this.store.pipe(select(Kt1255Selectors.getKt1255Data));
  defaultRow$ = this.store.pipe(select(Kt1255Selectors.getKt1255DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1255Actions.init());
  }

  save(ktAtTincalTempYuzdeUzama: KtAtTincalTempYuzdeUzama) {
    this.store.dispatch(Kt1255Actions.save({ ktAtTincalTempYuzdeUzama }));
  }
}
