import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GridInputChangeModel } from '../../models/data-grid-input.model';
import * as KatsayiGirisActions from './katsayi-giris.actions';
import { KatsayiModel } from './katsayi-giris.models';
import * as KatsayiGirisSelectors from './katsayi-giris.selectors';

@Injectable()
export class KatsayiGirisFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(
    select(KatsayiGirisSelectors.getCoefficientInputLoaded)
  );
  leftTitleList$ = this.store.pipe(
    select(KatsayiGirisSelectors.getLeftTreeList)
  );
  coefficients$ = this.store.pipe(
    select(KatsayiGirisSelectors.getCoefficients)
  );
  getDataGrid$ = this.store.pipe(select(KatsayiGirisSelectors.getDataGrid));
  invalidGrid$ = this.store.pipe(select(KatsayiGirisSelectors.getInvalidGrid));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(KatsayiGirisActions.initCoefficientPage());
  }

  load(year: number, previousYear?: boolean) {
    this.store.dispatch(
      KatsayiGirisActions.loadCoefficientInputRequest({ year, previousYear })
    );
  }

  updateGrid(event: GridInputChangeModel) {
    this.store.dispatch(
      KatsayiGirisActions.updateCoefficientDataGrid({ group: event })
    );
  }

  verifyInput(key: string) {
    this.store.dispatch(KatsayiGirisActions.verifyCoefficientDataGrid({ key }));
  }

  saveDataGrid(
    coefficients?: KatsayiModel[],
    year?: number,
    previousYear?: boolean
  ) {
    this.store.dispatch(
      KatsayiGirisActions.saveCoefficientInputRequest({
        coefficients,
        year,
        previousYear,
      })
    );
  }
}
