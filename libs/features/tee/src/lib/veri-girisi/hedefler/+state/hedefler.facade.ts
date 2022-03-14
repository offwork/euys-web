import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GridInputChangeModel } from '../../models/data-grid-input.model';
import * as HedeflerActions from './hedefler.actions';
import { Hedef } from './hedefler.models';
import * as HedeflerSelectors from './hedefler.selectors';

@Injectable()
export class HedeflerFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(HedeflerSelectors.getHedeflerLoaded));
  leftTitleList$ = this.store.pipe(select(HedeflerSelectors.getLeftTreeList));
  targets$ = this.store.pipe(select(HedeflerSelectors.getTargets));
  dataGrid$ = this.store.pipe(select(HedeflerSelectors.getDataGrid));
  invalidGrid$ = this.store.pipe(select(HedeflerSelectors.getInvalidGrid));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(HedeflerActions.initHedeflerPage());
  }

  load(year: number) {
    this.store.dispatch(HedeflerActions.loadHedeflerRequest({ year }));
  }

  updateDataGrid(change: GridInputChangeModel) {
    this.store.dispatch(HedeflerActions.updateHedeflerDataGrid({ change }));
  }

  verify() {
    this.store.dispatch(HedeflerActions.verifyHedeflerDataGrid());
  }

  save(hedefler: Hedef[], year?: number) {
    this.store.dispatch(
      HedeflerActions.saveHedeflerRequest({ hedefler, year })
    );
  }

  update(hedefler: Hedef[], year?: number) {
    this.store.dispatch(
      HedeflerActions.updateHedeflerRequest({ hedefler, year })
    );
  }
}
