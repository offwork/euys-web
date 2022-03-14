import { Injectable } from '@angular/core';
import { KtSpAlkaliTemizleme } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1306Actions from './kt-1306.actions';
import * as Kt1306Selectors from './kt-1306.selectors';

@Injectable()
export class Kt1306Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1306Selectors.getKt1306Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1306Selectors.getKt1306LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1306Selectors.getKt1306LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1306Selectors.getKt1306Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1306Selectors.getKt1306AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1306Selectors.getKt1306Urunler));
  celikler$ = this.store.pipe(select(Kt1306Selectors.getKt1306Celikler));
  defaultRow$ = this.store.pipe(select(Kt1306Selectors.getKt1306DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1306Actions.init());
  }
  save(ktSpAlkaliTemizleme: KtSpAlkaliTemizleme) {
    this.store.dispatch(Kt1306Actions.save({ ktSpAlkaliTemizleme }));
  }
}
