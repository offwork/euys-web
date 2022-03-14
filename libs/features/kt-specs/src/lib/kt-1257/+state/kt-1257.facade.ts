import { Injectable } from '@angular/core';
import { KtAtYuzeyDuzgunlugu } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1257Actions from './kt-1257.actions';
import * as Kt1257Selectors from './kt-1257.selectors';


@Injectable()
export class Kt1257Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1257Selectors.getKt1257Loaded));
  data$ = this.store.pipe(select(Kt1257Selectors.getKt1257Data));
  defaultRow$ = this.store.pipe(select(Kt1257Selectors.getKt1257DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1257Actions.init());
  }

  save(ktAtYuzeyDuzgunlugu: KtAtYuzeyDuzgunlugu) {
    this.store.dispatch(Kt1257Actions.save({ ktAtYuzeyDuzgunlugu }));
  }
}
