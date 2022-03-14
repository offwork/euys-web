import { Injectable } from '@angular/core';
import { YupTaslakAnaModel } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as actions from './up-3004.actions';
import * as selectors from './up-3004.selectors';

@Injectable()
export class Up3004Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  stage$ = this.store.pipe(select(selectors.getStage));
  loading$ = this.store.pipe(select(selectors.getLoading));
  data$ = this.store.pipe(select(selectors.getData));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(actions.init());
  }

  load(year: number) {
    this.store.dispatch(actions.load({ year }));
  }

  del(yupTaslak: YupTaslakAnaModel) {
    this.store.dispatch(actions.del({ yupTaslak }));
  }

  edit(yupTaslak: YupTaslakAnaModel) {
    this.store.dispatch(actions.edit({ yupTaslak }));
  }

  approve(yupTaslak: YupTaslakAnaModel) {
    this.store.dispatch(actions.approve({ yupTaslak }));
  }

  disapprove(yupTaslak: YupTaslakAnaModel) {
    this.store.dispatch(actions.disapprove({ yupTaslak }));
  }
}
