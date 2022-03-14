import { Injectable } from '@angular/core';
import { KtSpDualFazliKaliteSckHaddeSpec } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1325Actions from './kt-1325.actions';
import * as Kt1325Selectors from './kt-1325.selectors';

@Injectable()
export class Kt1325Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1325Selectors.getKt1325Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1325Selectors.getKt1325LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1325Selectors.getKt1325LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1325Selectors.getKt1325Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1325Selectors.getKt1325AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1325Selectors.getKt1325Urunler));
  celikler$ = this.store.pipe(select(Kt1325Selectors.getKt1325Celikler));
  defaultRow$ = this.store.pipe(select(Kt1325Selectors.getKt1325DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1325Actions.init());
  }
  save(ktSp2SckHadIkmalSicaklik: KtSpDualFazliKaliteSckHaddeSpec) {
    this.store.dispatch(Kt1325Actions.save({ ktSp2SckHadIkmalSicaklik }));
  }
}
