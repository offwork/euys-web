import { Injectable } from '@angular/core';
import { KtAtBafHattiTavlama } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1212Actions from './kt-1212.actions';
import * as Kt1212Selectors from './kt-1212.selectors';

@Injectable()
export class Kt1212Facade {
  loaded$ = this.store.pipe(select(Kt1212Selectors.getKt1212Loaded));
  data$ = this.store.pipe(select(Kt1212Selectors.getKt1212Data));
  defaultRow$ = this.store.pipe(select(Kt1212Selectors.getKt1212DefaultRow));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(Kt1212Actions.init());
  }
  save(ktAtBafHattiTavlama: KtAtBafHattiTavlama) {
    this.store.dispatch(Kt1212Actions.save({ ktAtBafHattiTavlama }));
  }
}
