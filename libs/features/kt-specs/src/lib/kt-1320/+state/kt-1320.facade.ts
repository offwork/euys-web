import { Injectable } from '@angular/core';
import { KtSpCgl12Tavlama2 } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1320Actions from './kt-1320.actions';
import * as Kt1320Selectors from './kt-1320.selectors';

@Injectable()
export class Kt1320Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1320Selectors.getKt1320Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1320Selectors.getKt1320LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1320Selectors.getKt1320LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1320Selectors.getKt1320Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1320Selectors.getKt1320AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1320Selectors.getKt1320Urunler));
  celikler$ = this.store.pipe(select(Kt1320Selectors.getKt1320Celikler));
  defaultRow$ = this.store.pipe(select(Kt1320Selectors.getKt1320DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1320Actions.init());
  }
  save(ktSpCgl12Tavlama2: KtSpCgl12Tavlama2) {
    this.store.dispatch(Kt1320Actions.save({ ktSpCgl12Tavlama2 }));
  }
}
