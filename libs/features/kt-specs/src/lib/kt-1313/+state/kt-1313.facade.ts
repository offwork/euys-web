import { Injectable } from '@angular/core';
import { KtSpBobinBalikKuyrugu } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1313Actions from './kt-1313.actions';
import * as Kt1313Selectors from './kt-1313.selectors';

@Injectable()
export class Kt1313Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1313Selectors.getKt1313Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1313Selectors.getKt1313LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1313Selectors.getKt1313LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1313Selectors.getKt1313Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1313Selectors.getKt1313AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1313Selectors.getKt1313Urunler));
  celikler$ = this.store.pipe(select(Kt1313Selectors.getKt1313Celikler));
  defaultRow$ = this.store.pipe(select(Kt1313Selectors.getKt1313DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1313Actions.init());
  }
  save(ktSpBobinBalikKuyrugu: KtSpBobinBalikKuyrugu) {
    this.store.dispatch(Kt1313Actions.save({ ktSpBobinBalikKuyrugu }));
  }
}
