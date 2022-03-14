import { Injectable } from '@angular/core';
import { ImalatLotSorguModel } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as ImalatLotActions from './imalat-lot.actions';
import * as ImalatLotSelectors from './imalat-lot.selectors';

@Injectable()
export class ImalatLotFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loading$ = this.store.pipe(select(ImalatLotSelectors.getLoading));
  imalatLotList$ = this.store.pipe(select(ImalatLotSelectors.getImalatLotList));
  tedarikTipiList$ = this.store.pipe(
    select(ImalatLotSelectors.getTedarikTipiList)
  );
  statuList$ = this.store.pipe(select(ImalatLotSelectors.getStatuList));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(ImalatLotActions.init());
  }

  load(imalatLotSorguModel: ImalatLotSorguModel) {
    this.store.dispatch(
      ImalatLotActions.loadImalatLotList({ imalatLotSorguModel })
    );
  }

  loadTedarikTipiList() {
    this.store.dispatch(ImalatLotActions.loadTedarikTipiList());
  }

  loadStatuList() {
    this.store.dispatch(ImalatLotActions.loadStatuList());
  }
}
