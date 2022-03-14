import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as Up3017Actions from './up-3017.actions';
import * as Up3017Selectors from './up-3017.selectors';

@Injectable()
export class Up3017Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  kapasiteRaporGrubuList$ = this.store.pipe(
    select(Up3017Selectors.getKapasiteRaporGrubuList)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Up3017Actions.init());
  }

  load(kapasiteRapor: string, urunGrubu: string) {
    this.store.dispatch(
      Up3017Actions.loadKapasiteRaporGrubuList({ kapasiteRapor, urunGrubu })
    );
  }
}
