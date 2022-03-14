import { Injectable } from '@angular/core';
import { UtCinkoLapa } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Ut5101Actions from './ut-5101.actions';
import * as Ut5101Selectors from './ut-5101.selectors';

@Injectable()
export class Ut5101Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Ut5101Selectors.getUt5101Loaded));
  data$ = this.store.pipe(select(Ut5101Selectors.getUt5101Data));
  dataLog$ = this.store.pipe(select(Ut5101Selectors.getUt5101DataLog));
  vardiyaUretimleri$ = this.store.pipe(
    select(Ut5101Selectors.getUt5101VardiyaUretimleri)
  );
  lapaToplam$ = this.store.pipe(select(Ut5101Selectors.getUt5101Toplam));
  cinkoLapaCode$ = this.store.pipe(select(Ut5101Selectors.getUt5101Code));
  defaultRow$ = this.store.pipe(select(Ut5101Selectors.getUt5101DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Ut5101Actions.init());
  }
  save(utCinkoLapa: UtCinkoLapa) {
    this.store.dispatch(Ut5101Actions.save({ utCinkoLapa }));
  }
  log(utCinkoLapa: UtCinkoLapa) {
    this.store.dispatch(Ut5101Actions.loadUt5101Log({ utCinkoLapa }));
  }
}
