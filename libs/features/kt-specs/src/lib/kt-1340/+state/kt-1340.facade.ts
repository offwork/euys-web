import { Injectable } from '@angular/core';
import { KtSpKromKaplamaTfsDragout } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1340Actions from './kt-1340.actions';
import * as Kt1340Selectors from './kt-1340.selectors';

@Injectable()
export class Kt1340Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1340Selectors.getKt1340Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1340Selectors.getKt1340LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1340Selectors.getKt1340LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1340Selectors.getKt1340Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1340Selectors.getKt1340AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1340Selectors.getKt1340Urunler));
  celikler$ = this.store.pipe(select(Kt1340Selectors.getKt1340Celikler));
  defaultRow$ = this.store.pipe(select(Kt1340Selectors.getKt1340DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1340Actions.init());
  }
  save(ktSpKromKaplamaTfsDragout: KtSpKromKaplamaTfsDragout) {
    this.store.dispatch(Kt1340Actions.save({ ktSpKromKaplamaTfsDragout }));
  }
}
