import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import { KtAtDokumCelikKalitesi } from '@euys/api-interfaces';

import * as Kt1224Actions from './kt-1224.actions';
import * as Kt1224Selectors from './kt-1224.selectors';

@Injectable()
export class Kt1224Facade {
  loaded$ = this.store.pipe(select(Kt1224Selectors.getKt1224Loaded));
  data$ = this.store.pipe(select(Kt1224Selectors.getKt1224Data));
  defaultRow$ = this.store.pipe(select(Kt1224Selectors.getKt1224DefaultRow));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(Kt1224Actions.init());
  }

  save(ktAtDokumCelikKalitesi: KtAtDokumCelikKalitesi) {
    this.store.dispatch(Kt1224Actions.save({ ktAtDokumCelikKalitesi }));
  }
}
