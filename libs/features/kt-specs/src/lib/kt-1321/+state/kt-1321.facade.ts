import { Injectable } from '@angular/core';
import { KtSpCgl12Temizleme } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1321Actions from './kt-1321.actions';
import * as Kt1321Selectors from './kt-1321.selectors';

@Injectable()
export class Kt1321Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1321Selectors.getKt1321Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1321Selectors.getKt1321LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1321Selectors.getKt1321LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1321Selectors.getKt1321Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1321Selectors.getKt1321AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1321Selectors.getKt1321Urunler));
  celikler$ = this.store.pipe(select(Kt1321Selectors.getKt1321Celikler));
  defaultRow$ = this.store.pipe(select(Kt1321Selectors.getKt1321DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1321Actions.init());
  }
  save(ktSpCgl12Temizleme: KtSpCgl12Temizleme) {
    this.store.dispatch(Kt1321Actions.save({ ktSpCgl12Temizleme }));
  }
}
