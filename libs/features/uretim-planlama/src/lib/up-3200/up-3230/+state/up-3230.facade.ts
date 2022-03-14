import { Injectable } from '@angular/core';
import { ImalatLotResponseModel } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Up3230Actions from './up-3230.actions';
import * as Up3230Selectors from './up-3230.selectors';

@Injectable()
export class Up3230Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  progress$ = this.store.pipe(select(Up3230Selectors.getProgress));
  failedUpdateList$ = this.store.pipe(
    select(Up3230Selectors.getFailedUpdateList)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Up3230Actions.init());
  }

  update(updateList: ImalatLotResponseModel[]) {
    this.store.dispatch(Up3230Actions.update({ updateList }));
  }
}
