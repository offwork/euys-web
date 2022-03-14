import { Injectable } from '@angular/core';
import { KtSpBafHattiTavlama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1312Actions from './kt-1312.actions';
import * as Kt1312Selectors from './kt-1312.selectors';

@Injectable()
export class Kt1312Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1312Selectors.getKt1312Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1312Selectors.getKt1312LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1312Selectors.getKt1312LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1312Selectors.getKt1312Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1312Selectors.getKt1312AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1312Selectors.getKt1312Urunler));
  celikler$ = this.store.pipe(select(Kt1312Selectors.getKt1312Celikler));
  defaultRow$ = this.store.pipe(select(Kt1312Selectors.getKt1312DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1312Actions.init());
  }
  save(ktSpIiTenekeKalayKimyasal: KtSpBafHattiTavlama) {
    this.store.dispatch(Kt1312Actions.save({ ktSpIiTenekeKalayKimyasal }));
  }
}
