import { Injectable } from '@angular/core';
import { UtIsletmeHaddeYagEmulsiyon, UtIsletmeHaddeYagEmulsiyonModel } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Ut5107Actions from './ut-5107.actions';
import * as Ut5107Selectors from './ut-5107.selectors';

@Injectable()
export class Ut5107Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Ut5107Selectors.getUt5107Loaded));
  data$ = this.store.pipe(select(Ut5107Selectors.getUt5107Data));
  dataLog$ = this.store.pipe(select(Ut5107Selectors.getUt5107DataLog));
  vardiyaUretimleri$ = this.store.pipe(
    select(Ut5107Selectors.getUt5107VardiyaUretimleri)
    );
  vardiyaNoList$ = this.store.pipe(select(Ut5107Selectors.getUt5107VardiyaNoList));
  
  /**hatKodList$ = this.store.pipe(select(Ut5107Selectors.getUt5107HatKodList));
  *tankNoList$ = this.store.pipe(select(Ut5107Selectors.getUt5107TankNoList));
  */
  utIsletmeHaddeYagEmulsiyonCode$ = this.store.pipe(select(Ut5107Selectors.getUt5107Code));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Ut5107Actions.init());
  }
  save(utIsletmeHaddeYagEmulsiyon: UtIsletmeHaddeYagEmulsiyonModel) {
    this.store.dispatch(Ut5107Actions.save({ utIsletmeHaddeYagEmulsiyon }));
  }
  log(utIsletmeHaddeYagEmulsiyon: UtIsletmeHaddeYagEmulsiyon) {
    this.store.dispatch(Ut5107Actions.loadUt5107Log({ utIsletmeHaddeYagEmulsiyon }));
  }
}
