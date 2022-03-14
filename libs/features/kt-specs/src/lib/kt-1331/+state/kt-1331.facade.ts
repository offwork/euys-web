import { Injectable } from '@angular/core';
import { KtSpIiTenekeKalayErgitme } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1331Actions from './kt-1331.actions';
import * as Kt1331Selectors from './kt-1331.selectors';

@Injectable()
export class Kt1331Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1331Selectors.getKt1331Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1331Selectors.getKt1331LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1331Selectors.getKt1331LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1331Selectors.getKt1331Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1331Selectors.getKt1331AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1331Selectors.getKt1331Urunler));
  celikler$ = this.store.pipe(select(Kt1331Selectors.getKt1331Celikler));
  defaultRow$ = this.store.pipe(select(Kt1331Selectors.getKt1331DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1331Actions.init());
  }
  save(ktSpIiTenekeKalayErgitme: KtSpIiTenekeKalayErgitme) {
    this.store.dispatch(Kt1331Actions.save({ ktSpIiTenekeKalayErgitme }));
  }
}
