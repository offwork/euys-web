import { Injectable } from '@angular/core';
import { YupGunlukPlanBilgileriModel } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as actions from './up-3021.actions';
import * as selectors from './up-3021.selectors';

@Injectable()
export class Up3021Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  stage$ = this.store.pipe(select(selectors.getStage));

  data$ = this.store.pipe(select(selectors.getData));

  tesisAdlari$ = this.store.pipe(select(selectors.getTesisAdlari));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(actions.init());
  }

  load(yupGunlukPlanBilgileriModel: YupGunlukPlanBilgileriModel) {
    this.store.dispatch(actions.load({ yupGunlukPlanBilgileriModel }));
  }
}
