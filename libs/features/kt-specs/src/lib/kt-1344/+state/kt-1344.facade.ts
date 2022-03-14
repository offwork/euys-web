import { Injectable } from '@angular/core';
import { KtSpMarkalama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1344Actions from './kt-1344.actions';
import * as Kt1344Selectors from './kt-1344.selectors';

@Injectable()
export class Kt1344Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1344Selectors.getKt1344Loaded));
  data$ = this.store.pipe(select(Kt1344Selectors.getKt1344Data));
  hatKomboList$ = this.store.pipe(
    select(Kt1344Selectors.getKt1344AHatKomboList)
  );
  anatabloKomboList$ = this.store.pipe(
    select(Kt1344Selectors.getKt1344AnatabloKomboList)
  );
  oiAnatabloKomboList$ = this.store.pipe(
    select(Kt1344Selectors.getKt1344OIAnatabloKomboList)
  );
  defaultRow$ = this.store.pipe(select(Kt1344Selectors.getKt1344DefaultRow));
  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1344Actions.init());
  }
  save(ktSpMarkalama: KtSpMarkalama) {
    this.store.dispatch(Kt1344Actions.save({ ktSpMarkalama }));
  }
}
