import { Injectable } from '@angular/core';
import { KtAtYansitmaTesti } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1259Actions from './kt-1259.actions';
import * as Kt1259Selectors from './kt-1259.selectors';


@Injectable()
export class Kt1259Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */

  loaded$ = this.store.pipe(select(Kt1259Selectors.getKt1259Loaded));
  data$ = this.store.pipe(select(Kt1259Selectors.getKt1259Data));
  defaultRow$ = this.store.pipe(select(Kt1259Selectors.getKt1259DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1259Actions.init());
  }

  save(ktAtYansitmaTesti: KtAtYansitmaTesti) {
    this.store.dispatch(Kt1259Actions.save({ ktAtYansitmaTesti }));
  }
}
