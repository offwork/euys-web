import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as Ut6113Actions from './ut-6113.actions';
import * as Ut6113Selectors from './ut-6113.selectors';
import { UtDurdurmaKodAdlariModel } from '@euys/api-interfaces';
import { filter } from 'rxjs/operators';

@Injectable()
export class Ut6113Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(Ut6113Selectors.getUt6113Loaded));
  data$ = this.store.pipe(
    select(Ut6113Selectors.getUt6113Data),
    filter(i => i !== undefined)
  );
  saveResponse$ = this.store.pipe(
    select(Ut6113Selectors.getUt6113SaveResponse),
    filter(i => i !== undefined)
  );
  deleteResponse$ = this.store.pipe(
    select(Ut6113Selectors.getUt6113DeleteResponse),
    filter(i => i !== undefined)
  );
  listeler$ = this.store.pipe(select(Ut6113Selectors.getUt6113Listeler));
  altKodListesi$ = this.store.pipe(
    select(Ut6113Selectors.getUt6113AltKodListesi)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Ut6113Actions.init());
    this.store.dispatch(Ut6113Actions.loadListelerUt6113());
  }

  save(data: UtDurdurmaKodAdlariModel) {
    this.store.dispatch(Ut6113Actions.saveUt6113({ data }));
  }

  delete(data: UtDurdurmaKodAdlariModel) {
    this.store.dispatch(Ut6113Actions.deleteUt6113({ data }));
  }

  findByAnaKod(anaKod: string) {
    this.store.dispatch(Ut6113Actions.findByAnaKodUt6113({ anaKod }));
  }
}
