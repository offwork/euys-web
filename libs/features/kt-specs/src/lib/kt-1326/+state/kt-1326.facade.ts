import { Injectable } from '@angular/core';
import { KtSpEnineKalinlikVeIkiKenarFarklariSpec } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1326Actions from './kt-1326.actions';
import * as Kt1326Selectors from './kt-1326.selectors';

@Injectable()
export class Kt1326Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1326Selectors.getKt1326Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1326Selectors.getKt1326LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1326Selectors.getKt1326LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1326Selectors.getKt1326Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1326Selectors.getKt1326AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1326Selectors.getKt1326Urunler));
  celikler$ = this.store.pipe(select(Kt1326Selectors.getKt1326Celikler));
  defaultRow$ = this.store.pipe(select(Kt1326Selectors.getKt1326DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1326Actions.init());
  }
  save(
    ktSpEnineKalinlikVeIkiKenarFarklari: KtSpEnineKalinlikVeIkiKenarFarklariSpec
  ) {
    this.store.dispatch(
      Kt1326Actions.save({ ktSpEnineKalinlikVeIkiKenarFarklari })
    );
  }
}
