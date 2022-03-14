import { Injectable } from '@angular/core';
import { KtSp2SckHadSarilmaSicakl } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1304Actions from './kt-1304.actions';
import * as Kt1304Selectors from './kt-1304.selectors';

@Injectable()
export class Kt1304Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1304Selectors.getKt1304Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1304Selectors.getKt1304LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1304Selectors.getKt1304LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1304Selectors.getKt1304Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1304Selectors.getKt1304AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1304Selectors.getKt1304Urunler));
  celikler$ = this.store.pipe(select(Kt1304Selectors.getKt1304Celikler));
  defaultRow$ = this.store.pipe(select(Kt1304Selectors.getKt1304DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1304Actions.init());
  }
  save(ktSp2SckHadSarilmaSicakl: KtSp2SckHadSarilmaSicakl) {
    this.store.dispatch(Kt1304Actions.save({ ktSp2SckHadSarilmaSicakl }));
  }
}
