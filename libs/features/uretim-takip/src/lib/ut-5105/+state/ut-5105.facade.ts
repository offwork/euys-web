import { Injectable } from '@angular/core';
import { UtTankDurulama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Ut5105Actions from './ut-5105.actions';
import * as Ut5105Selectors from './ut-5105.selectors';

@Injectable()
export class Ut5105Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Ut5105Selectors.getUt5105Loaded));
  data$ = this.store.pipe(select(Ut5105Selectors.getUt5105Data));
  dataLog$ = this.store.pipe(select(Ut5105Selectors.getUt5105DataLog));
  vardiyaUretimleri$ = this.store.pipe(
    select(Ut5105Selectors.getUt5105VardiyaUretimleri)
  );
  hatKodList$ = this.store.pipe(select(Ut5105Selectors.getUt5105HatKodList));
  tankNoList$ = this.store.pipe(select(Ut5105Selectors.getUt5105TankNoList));
  utTankDurulamaCode$ = this.store.pipe(select(Ut5105Selectors.getUt5105Code));
  utTankDurulamaLimitList$ = this.store.pipe(
    select(Ut5105Selectors.getUt5105TankDurulamaLimitler)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Ut5105Actions.init());
  }
  save(utTankDurulama: UtTankDurulama) {
    this.store.dispatch(Ut5105Actions.save({ utTankDurulama }));
  }
  log(utTankDurulama: UtTankDurulama) {
    this.store.dispatch(Ut5105Actions.loadUt5105Log({ utTankDurulama }));
  }
}
