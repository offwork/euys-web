import { Injectable } from '@angular/core';
import { UtTankAsitlemeLimit } from '@euys/api-interfaces';
import { select, Store, Action } from '@ngrx/store';

import * as Ut5102Actions from './ut-5102.actions';
import * as Ut5102Feature from './ut-5102.reducer';
import * as Ut5102Selectors from './ut-5102.selectors';

@Injectable()
export class Ut5102Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loading$ = this.store.pipe(select(Ut5102Selectors.getUt5102Loading));
  hatList$ = this.store.pipe(select(Ut5102Selectors.getUt5102HatList));
  tankList$ = this.store.pipe(select(Ut5102Selectors.getUt5102TankList));
  isUpdate$ = this.store.pipe(select(Ut5102Selectors.getUt5102isUpdate));
  utTankAsitlemeLimit$ = this.store.pipe(
    select(Ut5102Selectors.getUt5102utTankAsitlemeLimit)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Ut5102Actions.init());
  }
  getData() {
    this.store.dispatch(Ut5102Actions.getData());
  }

  save(utTankAsitlemeLimit: UtTankAsitlemeLimit) {
    this.store.dispatch(Ut5102Actions.save({ utTankAsitlemeLimit }));
  }
}
