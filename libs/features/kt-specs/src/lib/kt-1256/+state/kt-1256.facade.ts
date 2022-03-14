import { Injectable } from '@angular/core';
import { KtAtYaglama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1256Actions from './kt-1256.actions';
import * as Kt1256Selectors from './kt-1256.selectors';

@Injectable()
export class Kt1256Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1256Selectors.getKt1256Loaded));
  data$ = this.store.pipe(select(Kt1256Selectors.getKt1256Data));
  yaglamaMarkalari$ = this.store.pipe(select(Kt1256Selectors.getKt1256YaglamaMarkalari));
  yaglamaDurumlari$ = this.store.pipe(select(Kt1256Selectors.getKt1256YaglamaDurumlari));
  yaglamaYuzeyleri$ = this.store.pipe(select(Kt1256Selectors.getKt1256YaglamaYuzeyleri));
  yaglamaTipleri$ = this.store.pipe(select(Kt1256Selectors.getKt1256YaglamaTipleri));
  defaultRow$ = this.store.pipe(select(Kt1256Selectors.getKt1256DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1256Actions.init());
  }
  save(ktAtYaglama: KtAtYaglama) {
    this.store.dispatch(Kt1256Actions.save({ ktAtYaglama }));
  }
}
