import { Injectable } from '@angular/core';
import { KtSpIiTenekeKalayKaplama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1333Actions from './kt-1333.actions';
import * as Kt1333Selectors from './kt-1333.selectors';

@Injectable()
export class Kt1333Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1333Selectors.getKt1333Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1333Selectors.getKt1333LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1333Selectors.getKt1333LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1333Selectors.getKt1333Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1333Selectors.getKt1333AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1333Selectors.getKt1333Urunler));
  celikler$ = this.store.pipe(select(Kt1333Selectors.getKt1333Celikler));
  defaultRow$ = this.store.pipe(select(Kt1333Selectors.getKt1333DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1333Actions.init());
  }
  save(ktSpIiTenekeKalayKaplama: KtSpIiTenekeKalayKaplama) {
    this.store.dispatch(Kt1333Actions.save({ ktSpIiTenekeKalayKaplama }));
  }
}
