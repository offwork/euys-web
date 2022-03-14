import { Injectable } from '@angular/core';
import { UtAsitlemeRejenerasyon, UtAsitlemeRejenerasyonModel } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Ut5106Actions from './ut-5106.actions';
import * as Ut5106Selectors from './ut-5106.selectors';

@Injectable()
export class Ut5106Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Ut5106Selectors.getUt5106Loaded));
  data$ = this.store.pipe(select(Ut5106Selectors.getUt5106Data));
  dataLog$ = this.store.pipe(select(Ut5106Selectors.getUt5106DataLog));
  utAsitlemeRejenerasyonModelList$ = this.store.pipe(select(Ut5106Selectors.getUt5106UtAsitlemeRejenerasyonModelList));
  vardiyaUretimleri$ = this.store.pipe(
    select(Ut5106Selectors.getUt5106VardiyaUretimleri)
    );
  vardiyaNoList$ = this.store.pipe(select(Ut5106Selectors.getUt5106VardiyaNoList));
  
  /**hatKodList$ = this.store.pipe(select(Ut5106Selectors.getUt5106HatKodList));
  *tankNoList$ = this.store.pipe(select(Ut5106Selectors.getUt5106TankNoList));
  */
  utAsitlemeRejenerasyonCode$ = this.store.pipe(select(Ut5106Selectors.getUt5106Code));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Ut5106Actions.init());
  }
  save(utAsitlemeRejenerasyon: UtAsitlemeRejenerasyonModel) {
    this.store.dispatch(Ut5106Actions.save({ utAsitlemeRejenerasyon }));
  }
  log(utAsitlemeRejenerasyon: UtAsitlemeRejenerasyon) {
    this.store.dispatch(Ut5106Actions.loadUt5106Log({ utAsitlemeRejenerasyon }));
  }
}
