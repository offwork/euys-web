import { Injectable } from '@angular/core';
import { KtSpKromKaplamaTfsCro3 } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1339Actions from './kt-1339.actions';
import * as Kt1339Selectors from './kt-1339.selectors';

@Injectable()
export class Kt1339Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1339Selectors.getKt1339Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1339Selectors.getKt1339LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1339Selectors.getKt1339LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1339Selectors.getKt1339Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1339Selectors.getKt1339AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1339Selectors.getKt1339Urunler));
  celikler$ = this.store.pipe(select(Kt1339Selectors.getKt1339Celikler));
  defaultRow$ = this.store.pipe(select(Kt1339Selectors.getKt1339DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1339Actions.init());
  }
  save(ktSpKromKaplamaTfsCro3: KtSpKromKaplamaTfsCro3) {
    this.store.dispatch(Kt1339Actions.save({ ktSpKromKaplamaTfsCro3 }));
  }
}
