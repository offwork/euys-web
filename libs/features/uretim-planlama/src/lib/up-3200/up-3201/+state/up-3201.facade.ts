import { Injectable } from '@angular/core';
import { UpHatVerim } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Up3201Actions from './up-3201.actions';
import * as Up3201Selectors from './up-3201.selectors';

@Injectable()
export class Up3201Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  upHatVerimList$ = this.store.pipe(select(Up3201Selectors.getUpHatVerimList));
  upHatVerim$ = this.store.pipe(select(Up3201Selectors.saveUpHatVerim));
  stage$ = this.store.pipe(select(Up3201Selectors.getStage));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Up3201Actions.init());
  }

  loadUpHatVerimList() {
    this.store.dispatch(Up3201Actions.loadUpHatVerimList());
  }

  saveHatVerim(upHatVerim: UpHatVerim) {
    this.store.dispatch(Up3201Actions.saveHatVerim({ upHatVerim }));
  }
}
