import { Injectable } from '@angular/core';
import { KtSpBobinDilUcu } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1314Actions from './kt-1314.actions';
import * as Kt1314Selectors from './kt-1314.selectors';

@Injectable()
export class Kt1314Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1314Selectors.getKt1314Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1314Selectors.getKt1314LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1314Selectors.getKt1314LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1314Selectors.getKt1314Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1314Selectors.getKt1314AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1314Selectors.getKt1314Urunler));
  celikler$ = this.store.pipe(select(Kt1314Selectors.getKt1314Celikler));
  defaultRow$ = this.store.pipe(select(Kt1314Selectors.getKt1314DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1314Actions.init());
  }
  save(ktSpBobinDilUcu: KtSpBobinDilUcu) {
    this.store.dispatch(Kt1314Actions.save({ ktSpBobinDilUcu }));
  }
}
