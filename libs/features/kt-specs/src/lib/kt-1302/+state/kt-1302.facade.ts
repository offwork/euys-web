import { Injectable } from '@angular/core';
import { KtSp1SckHadSarilmaSicakl } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1302Actions from './kt-1302.actions';
import * as Kt1302Selectors from './kt-1302.selectors';

@Injectable()
export class Kt1302Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1302Selectors.getKt1302Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1302Selectors.getKt1302LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1302Selectors.getKt1302LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1302Selectors.getKt1302Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1302Selectors.getKt1302AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1302Selectors.getKt1302Urunler));
  celikler$ = this.store.pipe(select(Kt1302Selectors.getKt1302Celikler));
  defaultRow$ = this.store.pipe(select(Kt1302Selectors.getKt1302DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1302Actions.init());
  }
  save(ktSp1SckHadSarilmaSicakl: KtSp1SckHadSarilmaSicakl) {
    this.store.dispatch(Kt1302Actions.save({ ktSp1SckHadSarilmaSicakl }));
  }
}
