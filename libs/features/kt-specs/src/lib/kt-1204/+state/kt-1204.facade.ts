import { Injectable } from '@angular/core';
import { KtAt2SckHadSarilmaSicakl } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1204Actions from './kt-1204.actions';
import * as Kt1204Selectors from './kt-1204.selectors';

@Injectable()
export class Kt1204Facade {
  
  loaded$ = this.store.pipe(select(Kt1204Selectors.getKt1204Loaded));
  data$ = this.store.pipe(select(Kt1204Selectors.getKt1204Data));
  defaultRow$ = this.store.pipe(select(Kt1204Selectors.getKt1204DefaultRow));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1204Actions.init());
  }
  save(ktAt2SckHadSarilmaSicakl: KtAt2SckHadSarilmaSicakl) {
    this.store.dispatch(Kt1204Actions.save({ ktAt2SckHadSarilmaSicakl }));
  }
}
