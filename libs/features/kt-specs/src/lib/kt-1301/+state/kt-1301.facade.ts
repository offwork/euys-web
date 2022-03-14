import { Injectable } from '@angular/core';
import { KtSp1SckHadIkmalSicaklik } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1301Actions from './kt-1301.actions';
import * as Kt1301Selectors from './kt-1301.selectors';

@Injectable()
export class Kt1301Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1301Selectors.getKt1301Loaded));
  loadedUrunler$ = this.store.pipe(
    select(Kt1301Selectors.getKt1301LoadedUrunler)
  );
  loadedCelikler$ = this.store.pipe(
    select(Kt1301Selectors.getKt1301LoadedCelikler)
  );
  data$ = this.store.pipe(select(Kt1301Selectors.getKt1301Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1301Selectors.getKt1301AnatabloKomboList)
  );
  urunler$ = this.store.pipe(select(Kt1301Selectors.getKt1301Urunler));
  celikler$ = this.store.pipe(select(Kt1301Selectors.getKt1301Celikler));
  defaultRow$ = this.store.pipe(select(Kt1301Selectors.getKt1301DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1301Actions.init());
  }
  save(ktSp1SckHadIkmalSicaklik: KtSp1SckHadIkmalSicaklik) {
    this.store.dispatch(Kt1301Actions.save({ ktSp1SckHadIkmalSicaklik }));
  }
}
