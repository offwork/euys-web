import { Injectable } from '@angular/core';
import { ImalatLotResponseModel } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Up3231Actions from './up-3231.actions';
import * as Up3231Selectors from './up-3231.selectors';

@Injectable()
export class Up3231Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  progress$ = this.store.pipe(select(Up3231Selectors.getProgress));
  failedUpdateList$ = this.store.pipe(
    select(Up3231Selectors.getFailedUpdateList)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Up3231Actions.init());
  }

  update(updateList: ImalatLotResponseModel[]) {
    this.store.dispatch(Up3231Actions.update({ updateList }));
  }
}
