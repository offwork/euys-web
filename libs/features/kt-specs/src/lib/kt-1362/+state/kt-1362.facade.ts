import { Injectable } from '@angular/core';
import { KtSpAsitlemeTank } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1362Actions from './kt-1362.actions';
import * as Kt1362Selectors from './kt-1362.selectors';

@Injectable()
export class Kt1362Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1362Selectors.getKt1362Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1362Selectors.getKt1362LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1362Selectors.getKt1362LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1362Selectors.getKt1362Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1362Selectors.getKt1362AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1362Selectors.getKt1362Urunler));
  celikler$ = this.store.pipe(select(Kt1362Selectors.getKt1362Celikler));
  defaultRow$ = this.store.pipe(select(Kt1362Selectors.getKt1362DefaultRow));
  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1362Actions.init());
  }
  save(ktSpAsitlemeTank: KtSpAsitlemeTank) {
    this.store.dispatch(Kt1362Actions.save({ ktSpAsitlemeTank }));
  }
}
