import { Injectable } from '@angular/core';
import { KtSpIiTenekeKalayKimyasal } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1332Actions from './kt-1332.actions';
import * as Kt1332Selectors from './kt-1332.selectors';

@Injectable()
export class Kt1332Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1332Selectors.getKt1332Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1332Selectors.getKt1332LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1332Selectors.getKt1332LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1332Selectors.getKt1332Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1332Selectors.getKt1332AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1332Selectors.getKt1332Urunler));
  celikler$ = this.store.pipe(select(Kt1332Selectors.getKt1332Celikler));
  defaultRow$ = this.store.pipe(select(Kt1332Selectors.getKt1332DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1332Actions.init());
  }

  save(ktSpIiTenekeKalayKimyasal: KtSpIiTenekeKalayKimyasal) {
    this.store.dispatch(Kt1332Actions.save({ ktSpIiTenekeKalayKimyasal }));
  }
}
