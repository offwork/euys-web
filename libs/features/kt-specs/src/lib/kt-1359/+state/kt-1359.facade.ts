import { Injectable } from '@angular/core';
import { KtSpYaglamaSpec } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1359Actions from './kt-1359.actions';
import * as Kt1359Selectors from './kt-1359.selectors';

@Injectable()
export class Kt1359Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  yaglamaList$ = this.store.pipe(select(Kt1359Selectors.getKt1359YaglamaList));
  yaglamaListLoaded$ = this.store.pipe(
    select(Kt1359Selectors.getKt1359YaglamaListLoaded)
  );
  config$ = this.store.pipe(select(Kt1359Selectors.getKt1359Config));
  configLoaded$ = this.store.pipe(
    select(Kt1359Selectors.getKt1359ConfigLoaded)
  );
  data$ = this.store.pipe(select(Kt1359Selectors.getKt1359Data));
  kaliteler$ = this.store.pipe(select(Kt1359Selectors.getKt1359Kaliteler));
  hatlar$ = this.store.pipe(select(Kt1359Selectors.getKt1359Hatlar));
  markalar$ = this.store.pipe(
    select(Kt1359Selectors.getKt1359YaglamaMarkalari)
  );
  durumlar$ = this.store.pipe(select(Kt1359Selectors.getKt1359YaglamaDurumu));
  yuzeyler$ = this.store.pipe(select(Kt1359Selectors.getKt1359YaglamaYuzeyi));
  spekTablo$ = this.store.pipe(
    select(Kt1359Selectors.getKt1359YaglamaSpekAnaTablo)
  );
  urunler$ = this.store.pipe(select(Kt1359Selectors.getKt1359UrunList));
  defaultRow$ = this.store.pipe(select(Kt1359Selectors.getKt1359DefaultRow));
  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1359Actions.initConfig());
    this.store.dispatch(Kt1359Actions.initYaglamaList());
  }
  save(ktSPYaglamaSpec: KtSpYaglamaSpec) {
    this.store.dispatch(Kt1359Actions.save({ ktSPYaglamaSpec }));
  }
}
