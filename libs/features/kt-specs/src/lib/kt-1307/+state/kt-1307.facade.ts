import { Injectable } from '@angular/core';
import { KtSpAmbalajPaket } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1307Actions from './kt-1307.actions';
import * as Kt1307Selectors from './kt-1307.selectors';

@Injectable()
export class Kt1307Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1307Selectors.getKt1307Loaded));
  data$ = this.store.pipe(select(Kt1307Selectors.getKt1307Data));
  anatabloKomboList$ = this.store.pipe(
    select(Kt1307Selectors.getKt1307AnatabloKomboList)
  );
  urunAltGrupKomboList$ = this.store.pipe(
    select(Kt1307Selectors.getKt1307UrunAltGrupKomboList)
  );
  ambalajPaketKomboList$ = this.store.pipe(
    select(Kt1307Selectors.getKt1307AmbalajPaketKomboList)
  );
  defaultRow$ = this.store.pipe(select(Kt1307Selectors.getKt1307DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1307Actions.init());
  }
  save(ktSpAmbalajPaket: KtSpAmbalajPaket) {
    this.store.dispatch(Kt1307Actions.save({ ktSpAmbalajPaket }));
  }
}
