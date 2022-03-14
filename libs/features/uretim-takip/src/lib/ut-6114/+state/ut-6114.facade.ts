import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as Ut6114Actions from './ut-6114.actions';
import * as Ut6114Selectors from './ut-6114.selectors';
import { filter } from 'rxjs/operators';

@Injectable()
export class Ut6114Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Ut6114Selectors.getUt6114Loaded));
  data$ = this.store.pipe(
    select(Ut6114Selectors.getUt6114Data),
    filter(i => i != undefined)
  );
  listeler$ = this.store.pipe(select(Ut6114Selectors.getUt6114Listeler));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Ut6114Actions.init());
    this.store.dispatch(Ut6114Actions.loadListelerUt6114());
  }
}
