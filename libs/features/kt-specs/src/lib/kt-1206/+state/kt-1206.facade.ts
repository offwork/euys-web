import { Injectable } from '@angular/core';
import { KtAtAlkaliTemizleme } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1206Actions from './kt-1206.actions';
import * as Kt1206Selectors from './kt-1206.selectors';

@Injectable()
export class Kt1206Facade {
  loaded$ = this.store.pipe(select(Kt1206Selectors.getKt1206Loaded));
  data$ = this.store.pipe(select(Kt1206Selectors.getKt1206Data));
  defaultRow$ = this.store.pipe(select(Kt1206Selectors.getKt1206DefaultRow));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(Kt1206Actions.init());
  }
  save(ktAtAlkaliTemizleme: KtAtAlkaliTemizleme) {
    this.store.dispatch(Kt1206Actions.save({ ktAtAlkaliTemizleme }));
  }
}
