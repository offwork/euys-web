import { Injectable } from '@angular/core';
import { KtAtKromKaplamaTfsCro3 } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1239Actions from './kt-1239.actions';
import * as Kt1239Selectors from './kt-1239.selectors';

@Injectable()
export class Kt1239Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1239Selectors.getKt1239Loaded));
  data$ = this.store.pipe(select(Kt1239Selectors.getKt1239Data));
  defaultRow$ = this.store.pipe(select(Kt1239Selectors.getKt1239DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1239Actions.init());
  }
  save(ktAtKromKaplamaTfsCro3: KtAtKromKaplamaTfsCro3) {
    this.store.dispatch(Kt1239Actions.save({ ktAtKromKaplamaTfsCro3 }));
  }
}
