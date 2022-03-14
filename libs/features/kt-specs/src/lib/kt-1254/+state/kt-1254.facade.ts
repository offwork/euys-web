import { Injectable } from '@angular/core';
import { KtAtTincalHattiTemizleme } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1254Actions from './kt-1254.actions';
import * as Kt1254Selectors from './kt-1254.selectors';


@Injectable()
export class Kt1254Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1254Selectors.getKt1254Loaded));
  data$ = this.store.pipe(select(Kt1254Selectors.getKt1254Data));
  defaultRow$ = this.store.pipe(select(Kt1254Selectors.getKt1254DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1254Actions.init());
  }

  save(ktAtTincalHattiTemizleme: KtAtTincalHattiTemizleme) {
    this.store.dispatch(Kt1254Actions.save({ ktAtTincalHattiTemizleme }));
  }
}
