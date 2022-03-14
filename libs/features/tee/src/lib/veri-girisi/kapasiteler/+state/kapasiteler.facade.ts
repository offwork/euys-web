import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GridInputChangeModel } from '../../models/data-grid-input.model';
import * as KapasitelerActions from './kapasiteler.actions';
import { Kapasite } from './kapasiteler.models';
import * as KapasitelerSelectors from './kapasiteler.selectors';

@Injectable()
export class KapasitelerFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(KapasitelerSelectors.getKapasitelerLoaded));
  invalidGrid$ = this.store.pipe(select(KapasitelerSelectors.getInvalidGrid));
  capatiy$ = this.store.pipe(select(KapasitelerSelectors.getKapasite));
  dataGrid$ = this.store.pipe(select(KapasitelerSelectors.getKapasiteGrid));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(KapasitelerActions.initKapasitelerPage());
  }

  load(year: number, oncekiYil: boolean) {
    this.store.dispatch(
      KapasitelerActions.loadKapasitelerRequest({ year, oncekiYil })
    );
  }

  update(change: GridInputChangeModel) {
    this.store.dispatch(
      KapasitelerActions.updateKapasitelerDataGrid({ change })
    );
  }

  verify(key: string) {
    this.store.dispatch(KapasitelerActions.verifyKapasitelerDataGrid({ key }));
  }

  save(kapasite: Kapasite, year?: number, oncekiYil?: boolean) {
    this.store.dispatch(
      KapasitelerActions.saveKapasitelerRequest({ kapasite, year, oncekiYil })
    );
  }
}
