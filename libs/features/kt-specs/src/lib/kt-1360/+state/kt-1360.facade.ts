import { Injectable } from '@angular/core';
import { KtSpYansitmaTesti } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1360Actions from './kt-1360.actions';
import * as Kt1360Selectors from './kt-1360.selectors';

@Injectable()
export class Kt1360Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1360Selectors.getKt1360Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1360Selectors.getKt1360LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1360Selectors.getKt1360LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1360Selectors.getKt1360Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1360Selectors.getKt1360AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1360Selectors.getKt1360Urunler));
  celikler$ = this.store.pipe(select(Kt1360Selectors.getKt1360Celikler));
  defaultRow$ = this.store.pipe(select(Kt1360Selectors.getKt1360DefaultRow));
  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1360Actions.init());
  }
  save(ktSpYansitmaTesti: KtSpYansitmaTesti) {
    this.store.dispatch(Kt1360Actions.save({ ktSpYansitmaTesti }));
  }
}
