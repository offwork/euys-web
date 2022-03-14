import { Injectable } from '@angular/core';
import { Isgucu } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import { ManpowerInputEvent } from '../container/models/manpower-input.model';
import * as IsgucleriActions from './isgucleri.actions';
import * as IsgucleriSelectors from './isgucleri.selectors';

@Injectable()
export class IsgucleriFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(IsgucleriSelectors.getIsgucleriLoaded));
  allIsgucleri$ = this.store.pipe(select(IsgucleriSelectors.getAllIsgucleri));
  isValid$ = this.store.pipe(select(IsgucleriSelectors.getIsgucleriValid));
  data$ = this.store.pipe(select(IsgucleriSelectors.getIsgucleriData));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(IsgucleriActions.init());
  }

  load(yil: string) {
    this.store.dispatch(IsgucleriActions.loadIsgucleri({ yil }));
  }

  updateIsgucuGrid(event: ManpowerInputEvent) {
    this.store.dispatch(IsgucleriActions.updateIsgucu({ event }));
  }

  updateValidity() {
    this.store.dispatch(IsgucleriActions.validateIsgucleri());
  }

  saveIsgucuData(data: Isgucu[]) {
    this.store.dispatch(IsgucleriActions.saveIsgucleri({ data }));
  }
}
