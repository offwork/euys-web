import { Injectable } from '@angular/core';
import { KtSpAsitlemeTlv } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1363Actions from './kt-1363.actions';
import * as Kt1363Selectors from './kt-1363.selectors';

@Injectable()
export class Kt1363Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1363Selectors.getKt1363Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1363Selectors.getKt1363LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1363Selectors.getKt1363LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1363Selectors.getKt1363Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1363Selectors.getKt1363AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1363Selectors.getKt1363Urunler));
  celikler$ = this.store.pipe(select(Kt1363Selectors.getKt1363Celikler));
  defaultRow$ = this.store.pipe(select(Kt1363Selectors.getKt1363DefaultRow));
  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1363Actions.init());
  }
  save(ktSpAsitlemeTlv: KtSpAsitlemeTlv) {
    this.store.dispatch(Kt1363Actions.save({ ktSpAsitlemeTlv }));
  }
}
