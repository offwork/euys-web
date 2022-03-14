import { Injectable } from '@angular/core';
import { YupKapasiteRaporGrubuTanimlamaModel } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Up3015Actions from './up-3015.actions';
import * as Up3015Selectors from './up-3015.selectors';

@Injectable()
export class Up3015Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */

  rumuzList$ = this.store.pipe(select(Up3015Selectors.getRumuzList));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Up3015Actions.init());
  }

  loadKapasiteRumuzList(urunGrubu: string) {
    this.store.dispatch(Up3015Actions.loadKapasiteRumuzList({ urunGrubu }));
  }

  loadRaporRumuzList(urunGrubu: string) {
    this.store.dispatch(Up3015Actions.loadRaporRumuzList({ urunGrubu }));
  }

  saveKapasiteGrupTanim(
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel
  ) {
    this.store.dispatch(
      Up3015Actions.saveKapasiteGrupTanim({
        yupKapasiteRaporGrubuTanimlamaModel,
      })
    );
  }

  saveRaporGrupTanim(
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel
  ) {
    this.store.dispatch(
      Up3015Actions.saveRaporGrupTanim({ yupKapasiteRaporGrubuTanimlamaModel })
    );
  }
}
