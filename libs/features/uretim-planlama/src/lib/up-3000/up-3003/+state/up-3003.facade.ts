import { Injectable } from '@angular/core';
import { YupTaslakAnaModel } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as actions from './up-3003.actions';
import * as selectors from './up-3003.selectors';

@Injectable()
export class Up3003Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  stage$ = this.store.pipe(select(selectors.getStage));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(actions.init());
  }

  save(yupTaslakAnaModel: YupTaslakAnaModel, file: File) {
    this.store.dispatch(actions.save({ yupTaslakAnaModel, file }));
  }
}
