import { Injectable } from '@angular/core';
import { KtSpIiTenekeAsitleme } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1330Actions from './kt-1330.actions';
import * as Kt1330Selectors from './kt-1330.selectors';

@Injectable()
export class Kt1330Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1330Selectors.getKt1330Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1330Selectors.getKt1330LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1330Selectors.getKt1330LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1330Selectors.getKt1330Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1330Selectors.getKt1330AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1330Selectors.getKt1330Urunler));
  celikler$ = this.store.pipe(select(Kt1330Selectors.getKt1330Celikler));
  defaultRow$ = this.store.pipe(select(Kt1330Selectors.getKt1330DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1330Actions.init());
  }
  save(ktSpIiTenekeAsitleme: KtSpIiTenekeAsitleme) {
    this.store.dispatch(Kt1330Actions.save({ ktSpIiTenekeAsitleme }));
  }
}
