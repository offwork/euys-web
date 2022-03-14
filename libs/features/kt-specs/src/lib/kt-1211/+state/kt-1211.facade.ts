import { Injectable } from '@angular/core';
import { KtAtNumune } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kt1211Actions from './kt-1211.actions';
import * as Kt1211Selectors from './kt-1211.selectors';

@Injectable()
export class Kt1211Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Kt1211Selectors.getKt1211Loaded));
  data$ = this.store.pipe(select(Kt1211Selectors.getKt1211Data));
  numuneBazlari$=this.store.pipe(select(Kt1211Selectors.getKt1211NumuneBazlari));
  numuneYonleri$=this.store.pipe(select(Kt1211Selectors.getKt1211NumuneYonleri));
  numuneYerleri$=this.store.pipe(select(Kt1211Selectors.getKt1211NumuneYerleri));
  defaultRow$ = this.store.pipe(select(Kt1211Selectors.getKt1211DefaultRow));


  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kt1211Actions.init());
  }
  save(ktAtNumune: KtAtNumune) {
    this.store.dispatch(Kt1211Actions.save({ ktAtNumune }));
  }
}
