import { Injectable } from '@angular/core';
import { KtSpCgl12HavaSogutmaAjc } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1318Actions from './kt-1318.actions';
import * as Kt1318Selectors from './kt-1318.selectors';

@Injectable()
export class Kt1318Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1318Selectors.getKt1318Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1318Selectors.getKt1318LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1318Selectors.getKt1318LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1318Selectors.getKt1318Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1318Selectors.getKt1318AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1318Selectors.getKt1318Urunler));
  celikler$ = this.store.pipe(select(Kt1318Selectors.getKt1318Celikler));
  defaultRow$ = this.store.pipe(select(Kt1318Selectors.getKt1318DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1318Actions.init());
  }
  save(ktSpCgl12HavaSogutmaAjc: KtSpCgl12HavaSogutmaAjc) {
    this.store.dispatch(Kt1318Actions.save({ ktSpCgl12HavaSogutmaAjc }));
  }
}
