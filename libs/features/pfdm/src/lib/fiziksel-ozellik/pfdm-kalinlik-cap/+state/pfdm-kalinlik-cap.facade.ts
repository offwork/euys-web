import { Injectable } from '@angular/core';
import { KtAtAgirlik, PfdmKalinlikCap } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as PfdmKalinlikCapActions from './pfdm-kalinlik-cap.actions';
import * as PfdmKalinlikCapSelectors from './pfdm-kalinlik-cap.selectors';

@Injectable()
export class PfdmKalinlikCapFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(
    select(PfdmKalinlikCapSelectors.getPfdmKalinlikCapLoaded)
  );
  data$ = this.store.pipe(
    select(PfdmKalinlikCapSelectors.getPfdmKalinlikCapData)
  );
  defaultRow$ = this.store.pipe(
    select(PfdmKalinlikCapSelectors.getPfdmKalinlikCapDefaultRow)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(PfdmKalinlikCapActions.init());
  }

  save(pfdmKalinlikCap: PfdmKalinlikCap) {
    this.store.dispatch(PfdmKalinlikCapActions.save({ pfdmKalinlikCap }));
  }
  delete(pfdmKalinlikCap: PfdmKalinlikCap) {
    this.store.dispatch(PfdmKalinlikCapActions.deletePfdm({ pfdmKalinlikCap }));
  }
}
