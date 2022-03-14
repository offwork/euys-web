import { Injectable } from '@angular/core';
import {
  YupBackUpPlanGenelModel,
  YupBackUpPlanMamulDonusModel,
} from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as actions from './up-3030.actions';
import * as selectors from './up-3030.selectors';

@Injectable()
export class Up3030Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  stage$ = this.store.pipe(select(selectors.getStage));

  data$ = this.store.pipe(select(selectors.getData));

  pfUrunGruplari$ = this.store.pipe(select(selectors.getpfUrunGruplari));

  islemDurum$ = this.store.pipe(select(selectors.getIslemDurum));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(actions.init());
  }

  load(yil: string, donem: string, urunGrubu: string) {
    this.store.dispatch(actions.load({ yil, donem, urunGrubu }));
  }

  save(yupBackUpPlanGenelModel: YupBackUpPlanGenelModel) {
    this.store.dispatch(actions.save({ yupBackUpPlanGenelModel }));
  }
}
