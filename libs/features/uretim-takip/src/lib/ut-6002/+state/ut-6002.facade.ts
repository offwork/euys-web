import { Injectable } from '@angular/core';
import { KusurluIstifSorguModel } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Ut6002Actions from './ut-6002.actions';
import * as Ut6002Selectors from './ut-6002.selectors';

@Injectable()
export class Ut6002Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Ut6002Selectors.getUt6002Loaded));
  data$ = this.store.pipe(select(Ut6002Selectors.getUt6002KusurluIstifListesi));
  hatTanimListesi$ = this.store.pipe(
    select(Ut6002Selectors.getUt6002HatTanimListesi)
  );
  kusurIstifKaliteListesi$ = this.store.pipe(
    select(Ut6002Selectors.getUt6002KusurIstifKaliteListesi)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Ut6002Actions.init());
  }

  configGetir() {
    this.store.dispatch(Ut6002Actions.config());
  }

  sorgula(kusurluIstifSorguModel: KusurluIstifSorguModel) {
    this.store.dispatch(Ut6002Actions.sorgula({ kusurluIstifSorguModel }));
  }
}
