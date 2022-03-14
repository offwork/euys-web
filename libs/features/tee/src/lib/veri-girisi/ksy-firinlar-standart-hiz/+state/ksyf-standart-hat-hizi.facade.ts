import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GridInputChangeModel } from '../../models/data-grid-input.model';
import * as KsyfStandartHizActions from './ksyf-standart-hat-hizi.actions';
import { StandarHizlar } from './ksyf-standart-hat-hizi.models';
import * as KsyfStandartHatHiziSelectors from './ksyf-standart-hat-hizi.selectors';

@Injectable()
export class KsyfStandartHatHiziFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(
    select(KsyfStandartHatHiziSelectors.getKsyfStandartHatHiziLoaded)
  );
  standartHiz$ = this.store.pipe(
    select(KsyfStandartHatHiziSelectors.getStandartHiz)
  );
  dataGrid$ = this.store.pipe(
    select(KsyfStandartHatHiziSelectors.getStandartHizGrid)
  );
  invalidGrid$ = this.store.pipe(
    select(KsyfStandartHatHiziSelectors.getInvalidGrid)
  );
  lines$ = this.store.pipe(select(KsyfStandartHatHiziSelectors.getLines));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(KsyfStandartHizActions.initStandartHizPage());
    this.store.dispatch(KsyfStandartHizActions.linesRequestLoad());
  }

  load(year: number) {
    this.store.dispatch(
      KsyfStandartHizActions.loadStandartHizRequest({ year })
    );
  }

  update(change: GridInputChangeModel) {
    this.store.dispatch(
      KsyfStandartHizActions.updateStandartHizDataGrid({ change })
    );
  }

  verify(key: string) {
    this.store.dispatch(
      KsyfStandartHizActions.verifyStandartHizDataGrid({ key })
    );
  }

  save(standarHizlar: StandarHizlar, year?: number) {
    this.store.dispatch(
      KsyfStandartHizActions.saveStandartHizRequest({ standarHizlar, year })
    );
  }
}
