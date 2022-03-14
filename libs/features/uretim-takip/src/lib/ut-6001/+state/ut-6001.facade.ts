import { Injectable } from '@angular/core';
import {
  KusurluIstifSorguModel,
  UtKusurluIstifPaketModel,
} from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Ut6001Actions from './ut-6001.actions';
import * as Ut6001Selectors from './ut-6001.selectors';

@Injectable()
export class Ut6001Facade {
  loaded$ = this.store.pipe(select(Ut6001Selectors.getUt6001Loaded));
  data$ = this.store.pipe(select(Ut6001Selectors.getUt6001KusurluIstifListesi));
  hatTanimListesi$ = this.store.pipe(
    select(Ut6001Selectors.getUt6001HatTanimListesi)
  );
  kusurIstifKaliteListesi$ = this.store.pipe(
    select(Ut6001Selectors.getUt6001KusurIstifKaliteListesi)
  );

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(Ut6001Actions.init());
  }

  configGetir() {
    this.store.dispatch(Ut6001Actions.config());
  }

  save(utKusurluIstifPaketModel: UtKusurluIstifPaketModel) {
    this.store.dispatch(Ut6001Actions.save({ utKusurluIstifPaketModel }));
  }

  sorgula(kusurluIstifSorguModel: KusurluIstifSorguModel) {
    this.store.dispatch(Ut6001Actions.sorgula({ kusurluIstifSorguModel }));
  }

  iptalEt(utKusurluIstifPaketModel: UtKusurluIstifPaketModel) {
    this.store.dispatch(Ut6001Actions.iptalEt({ utKusurluIstifPaketModel }));
  }
}
