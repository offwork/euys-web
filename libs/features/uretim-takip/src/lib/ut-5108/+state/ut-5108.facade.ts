import { Injectable } from '@angular/core';
import {
  UtIsletmeHaddeYagEmulsiyon,
  UtIsletmeHaddeYagEmulsiyonModel,
} from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Ut5108Actions from './ut-5108.actions';
import * as Ut5108Selectors from './ut-5108.selectors';

@Injectable()
export class Ut5108Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Ut5108Selectors.getUt5108Loaded));
  data$ = this.store.pipe(select(Ut5108Selectors.getUt5108Data));
  dataLog$ = this.store.pipe(select(Ut5108Selectors.getUt5108DataLog));
  vardiyaUretimleri$ = this.store.pipe(
    select(Ut5108Selectors.getUt5108VardiyaUretimleri)
  );
  vardiyaNoList$ = this.store.pipe(
    select(Ut5108Selectors.getUt5108VardiyaNoList)
  );

  /**hatKodList$ = this.store.pipe(select(Ut5108Selectors.getUt5108HatKodList));
   *tankNoList$ = this.store.pipe(select(Ut5108Selectors.getUt5108TankNoList));
   */
  utIsletmeHaddeYagEmulsiyonCode$ = this.store.pipe(
    select(Ut5108Selectors.getUt5108Code)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Ut5108Actions.init());
  }
  save(utIsletmeHaddeYagEmulsiyon: UtIsletmeHaddeYagEmulsiyonModel) {
    this.store.dispatch(Ut5108Actions.save({ utIsletmeHaddeYagEmulsiyon }));
  }
  log(utIsletmeHaddeYagEmulsiyon: UtIsletmeHaddeYagEmulsiyon) {
    this.store.dispatch(
      Ut5108Actions.loadUt5108Log({ utIsletmeHaddeYagEmulsiyon })
    );
  }
}
