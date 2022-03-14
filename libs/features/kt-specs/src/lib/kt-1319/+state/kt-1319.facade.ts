import { Injectable } from '@angular/core';
import { KtSpCgl12Tavlama1 } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1319Actions from './kt-1319.actions';
import * as Kt1319Selectors from './kt-1319.selectors';

@Injectable()
export class Kt1319Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1319Selectors.getKt1319Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1319Selectors.getKt1319LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1319Selectors.getKt1319LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1319Selectors.getKt1319Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1319Selectors.getKt1319AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1319Selectors.getKt1319Urunler));
  celikler$ = this.store.pipe(select(Kt1319Selectors.getKt1319Celikler));
  defaultRow$ = this.store.pipe(select(Kt1319Selectors.getKt1319DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1319Actions.init());
  }
  save(ktSpCgl12Tavlama1: KtSpCgl12Tavlama1) {
    this.store.dispatch(Kt1319Actions.save({ ktSpCgl12Tavlama1 }));
  }
}
