import { Injectable } from '@angular/core';
import { KtAtTcalSogutmaYaslandirma } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kt1252Actions from './kt-1252.actions';
import * as Kt1252Selectors from './kt-1252.selectors';

@Injectable()
export class Kt1252Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1252Selectors.getKt1252Loaded));
  data$ = this.store.pipe(select(Kt1252Selectors.getKt1252Data));
  defaultRow$ = this.store.pipe(select(Kt1252Selectors.getKt1252DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1252Actions.init());
  }

  save(ktAtTcalSogutmaYaslandirma: KtAtTcalSogutmaYaslandirma) {
    this.store.dispatch(Kt1252Actions.save({ ktAtTcalSogutmaYaslandirma }));
  }
}
