import { Injectable } from '@angular/core';
import { KtAtDualBazliKaliteSckHadde } from '@euys/api-interfaces';
import { select, Store, Action } from '@ngrx/store';

import * as Kt1225Actions from './kt-1225.actions';
import * as Kt1225Selectors from './kt-1225.selectors';

@Injectable()
export class Kt1225Facade {
  loaded$ = this.store.pipe(select(Kt1225Selectors.getKt1225Loaded));
  data$ = this.store.pipe(select(Kt1225Selectors.getKt1225Data));
  defaultRow$ = this.store.pipe(select(Kt1225Selectors.getKt1225DefaultRow));
  
  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(Kt1225Actions.init());
  }
  
  save(ktAtDualBazliKaliteSckHadde: KtAtDualBazliKaliteSckHadde) {
    this.store.dispatch(Kt1225Actions.save({ ktAtDualBazliKaliteSckHadde }));
  }
}
