import { Injectable } from '@angular/core';
import { KtSpKromKaplamaTfsFlor } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1341Actions from './kt-1341.actions';
import * as Kt1341Selectors from './kt-1341.selectors';

@Injectable()
export class Kt1341Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1341Selectors.getKt1341Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1341Selectors.getKt1341LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1341Selectors.getKt1341LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1341Selectors.getKt1341Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1341Selectors.getKt1341AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1341Selectors.getKt1341Urunler));
  celikler$ = this.store.pipe(select(Kt1341Selectors.getKt1341Celikler));
  defaultRow$ = this.store.pipe(select(Kt1341Selectors.getKt1341DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1341Actions.init());
  }
  save(ktSpKromKaplamaTfsFlor: KtSpKromKaplamaTfsFlor) {
    this.store.dispatch(Kt1341Actions.save({ ktSpKromKaplamaTfsFlor }));
  }
}
