import { Injectable } from '@angular/core';
import { KtAtTincalHattiTavlama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1253Actions from './kt-1253.actions';
import * as Kt1253Selectors from './kt-1253.selectors';

@Injectable()
export class Kt1253Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1253Selectors.getKt1253Loaded));
  data$ = this.store.pipe(select(Kt1253Selectors.getKt1253Data));
  defaultRow$ = this.store.pipe(select(Kt1253Selectors.getKt1253DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1253Actions.init());
  }

  save(ktAtTincalHattiTavlama: KtAtTincalHattiTavlama) {
    this.store.dispatch(Kt1253Actions.save({ ktAtTincalHattiTavlama }));
  }
}
