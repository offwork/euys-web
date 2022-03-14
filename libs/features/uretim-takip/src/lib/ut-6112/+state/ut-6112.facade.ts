import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as Ut6112Actions from './ut-6112.actions';
import * as Ut6112Selectors from './ut-6112.selectors';
import {UtDurdurmaStatuModel} from "@euys/api-interfaces";

@Injectable()
export class Ut6112Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Ut6112Selectors.getUt6112Loaded));
  data$ = this.store.pipe(select(Ut6112Selectors.getUt6112Data));

  constructor(private readonly store: Store) {
  }

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Ut6112Actions.init());
  }

  save(data: UtDurdurmaStatuModel) {
    this.store.dispatch(Ut6112Actions.saveUt6112({data}));
  }

  delete(data: UtDurdurmaStatuModel) {
    this.store.dispatch(Ut6112Actions.deleteUt6112({data}));
  }
}
