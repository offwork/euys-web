import { Injectable } from '@angular/core';
import { KtSp2SckHadIkmalSicaklik } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1303Actions from './kt-1303.actions';
import * as Kt1303Selectors from './kt-1303.selectors';

@Injectable()
export class Kt1303Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1303Selectors.getKt1303Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1303Selectors.getKt1303LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1303Selectors.getKt1303LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1303Selectors.getKt1303Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1303Selectors.getKt1303AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1303Selectors.getKt1303Urunler));
  celikler$ = this.store.pipe(select(Kt1303Selectors.getKt1303Celikler));
  defaultRow$ = this.store.pipe(select(Kt1303Selectors.getKt1303DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1303Actions.init());
  }
  save(ktSp2SckHadIkmalSicaklik: KtSp2SckHadIkmalSicaklik) {
    this.store.dispatch(Kt1303Actions.save({ ktSp2SckHadIkmalSicaklik }));
  }
}
