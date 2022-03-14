import { Injectable } from '@angular/core';
import { KtSpDurulama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1364Actions from './kt-1364.actions';
import * as Kt1364Selectors from './kt-1364.selectors';

@Injectable()
export class Kt1364Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1364Selectors.getKt1364Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1364Selectors.getKt1364LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1364Selectors.getKt1364LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1364Selectors.getKt1364Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1364Selectors.getKt1364AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1364Selectors.getKt1364Urunler));
  celikler$ = this.store.pipe(select(Kt1364Selectors.getKt1364Celikler));
  defaultRow$ = this.store.pipe(select(Kt1364Selectors.getKt1364DefaultRow));
  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1364Actions.init());
  }
  save(ktSpDurulama: KtSpDurulama) {
    this.store.dispatch(Kt1364Actions.save({ ktSpDurulama }));
  }
}
