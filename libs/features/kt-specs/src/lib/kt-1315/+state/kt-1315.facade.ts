import { Injectable } from '@angular/core';
import { KtSpBobHazTempYuzdeUzama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1315Actions from './kt-1315.actions';
import * as Kt1315Selectors from './kt-1315.selectors';

@Injectable()
export class Kt1315Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1315Selectors.getKt1315Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1315Selectors.getKt1315LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1315Selectors.getKt1315LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1315Selectors.getKt1315Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1315Selectors.getKt1315AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1315Selectors.getKt1315Urunler));
  celikler$ = this.store.pipe(select(Kt1315Selectors.getKt1315Celikler));
  defaultRow$ = this.store.pipe(select(Kt1315Selectors.getKt1315DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1315Actions.init());
  }
  save(ktSpBobHazTempYuzdeUzama: KtSpBobHazTempYuzdeUzama) {
    this.store.dispatch(Kt1315Actions.save({ ktSpBobHazTempYuzdeUzama }));
  }
}
