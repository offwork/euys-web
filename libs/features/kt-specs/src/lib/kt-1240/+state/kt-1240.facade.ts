import { Injectable } from '@angular/core';
import { KtAtKromKaplamaTfsDragout } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1240Actions from './kt-1240.actions';
import * as Kt1240Selectors from './kt-1240.selectors';

@Injectable()
export class Kt1240Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1240Selectors.getKt1240Loaded));
  data$ = this.store.pipe(select(Kt1240Selectors.getKt1240Data));
  defaultRow$ = this.store.pipe(select(Kt1240Selectors.getKt1240DefaultRow));


  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1240Actions.init());
  }
  save(ktAtKromKaplamaTfsDragout: KtAtKromKaplamaTfsDragout) {
    this.store.dispatch(Kt1240Actions.save({ ktAtKromKaplamaTfsDragout }));
  }
}
