import { Injectable } from '@angular/core';
import { YupKapasiteRaporGrubuTanimlamaModel } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Up3016Actions from './up-3016.actions';
import * as Up3016Selectors from './up-3016.selectors';

@Injectable()
export class Up3016Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  kapasiteRaporGrubuList$ = this.store.pipe(
    select(Up3016Selectors.getKapasiteRaporGrubuList)
  );

  kapasiteRaporGrubuRumuzList$ = this.store.pipe(
    select(Up3016Selectors.getKapasiteRaporGrubuRumuzList)
  );

  kapasiteRaporGrubuProcessing$ = this.store.pipe(
    select(Up3016Selectors.getKapasiteRaporGrubuProcessing)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Up3016Actions.init());
  }

  load(kapasiteRapor: string, urunGrubu: string) {
    this.store.dispatch(
      Up3016Actions.loadKapasiteRaporGrubuList({ kapasiteRapor, urunGrubu })
    );
  }

  loadKapasiteRumuzList(urunGrubu: string) {
    this.store.dispatch(Up3016Actions.loadKapasiteRumuzList({ urunGrubu }));
  }

  loadRaporRumuzList(urunGrubu: string) {
    this.store.dispatch(Up3016Actions.loadRaporRumuzList({ urunGrubu }));
  }

  updateKapasiteRaporRumuzList(
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel
  ) {
    this.store.dispatch(
      Up3016Actions.updateKapasiteRaporGrubuTanim({
        yupKapasiteRaporGrubuTanimlamaModel,
      })
    );
  }

  deleteKapasiteRaporGrupList(
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel
  ) {
    this.store.dispatch(
      Up3016Actions.deleteKapasiteRaporGrubuTanim({
        yupKapasiteRaporGrubuTanimlamaModel,
      })
    );
  }
}
