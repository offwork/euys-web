import { Injectable } from '@angular/core';
import { UtTankDurulamaLimit } from '@euys/api-interfaces';
import { select, Store, Action } from '@ngrx/store';

import * as Ut5104Actions from './ut-5104.actions';
import * as Ut5104Selectors from './ut-5104.selectors';

@Injectable()
export class Ut5104Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loading$ = this.store.pipe(select(Ut5104Selectors.getUt5104Loading));
  hatList$ = this.store.pipe(select(Ut5104Selectors.getUt5104HatList));
  tankList$ = this.store.pipe(select(Ut5104Selectors.getUt5104TankList));
  isUpdate$ = this.store.pipe(select(Ut5104Selectors.getUt5104isUpdate));
  utTankDurulamaLimit$ = this.store.pipe(
    select(Ut5104Selectors.getUt5104utTankDurulamaLimit)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Ut5104Actions.init());
  }

  getData() {
    this.store.dispatch(Ut5104Actions.getData());
  }

  save(utTankDurulamaLimit: UtTankDurulamaLimit) {
    this.store.dispatch(Ut5104Actions.save({ utTankDurulamaLimit }));
  }
}
