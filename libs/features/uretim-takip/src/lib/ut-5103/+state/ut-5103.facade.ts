import { Injectable } from '@angular/core';
import { UtTankAsitleme } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Ut5103Actions from './ut-5103.actions';
import * as Ut5103Selectors from './ut-5103.selectors';

@Injectable()
export class Ut5103Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Ut5103Selectors.getUt5103Loaded));
  data$ = this.store.pipe(select(Ut5103Selectors.getUt5103Data));
  dataLog$ = this.store.pipe(select(Ut5103Selectors.getUt5103DataLog));
  vardiyaUretimleri$ = this.store.pipe(
    select(Ut5103Selectors.getUt5103VardiyaUretimleri)
  );
  hatKodList$ = this.store.pipe(select(Ut5103Selectors.getUt5103HatKodList));
  tankNoList$ = this.store.pipe(select(Ut5103Selectors.getUt5103TankNoList));
  utTankAsitlemeCode$ = this.store.pipe(select(Ut5103Selectors.getUt5103Code));
  utTankAsitlemeLimitList$ = this.store.pipe(
    select(Ut5103Selectors.getUt5103TankAsitlemeLimitler)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Ut5103Actions.init());
  }
  save(utTankAsitleme: UtTankAsitleme) {
    this.store.dispatch(Ut5103Actions.save({ utTankAsitleme }));
  }
  log(utTankAsitleme: UtTankAsitleme) {
    this.store.dispatch(Ut5103Actions.loadUt5103Log({ utTankAsitleme }));
  }
}
