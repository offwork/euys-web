import { Injectable } from '@angular/core';
import { KkUretimYuzeyKusuru } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kk8140Actions from './kk-8140.actions';
import * as Kk8140Selectors from './kk-8140.selectors';

@Injectable()
export class Kk8140Facade {
  yuzeyKusuruVarMi$ = this.store.pipe(
    select(Kk8140Selectors.selectYuzeyKusuruVarMi)
  );
  disableYuzeyKusuruVarMi$ = this.store.pipe(
    select(Kk8140Selectors.selectDisableYuzeyKusuruVarMi)
  );

  yuzeyKusurKaydiList$ = this.store.pipe(
    select(Kk8140Selectors.getYuzeyKusurKaydiList)
  );

  yuzeyKusurKaydiListLoaded$ = this.store.pipe(
    select(Kk8140Selectors.getYuzeyKusurKaydiListLoaded)
  );

  butunAktifKusurListLoaded$ = this.store.pipe(
    select(Kk8140Selectors.selectButunAktifKusurListLoaded)
  );

  butunAktifKusurList$ = this.store.pipe(
    select(Kk8140Selectors.selectButunAktifKusurList)
  );

  defaultYuzeyKusurKodu$ = this.store.pipe(
    select(Kk8140Selectors.selectDefaultYuzeyKusurKodu)
  );

  dispoze$ = this.store.pipe(select(Kk8140Selectors.selectDispoze));

  minDerece$ = this.store.pipe(select(Kk8140Selectors.selectMinDerece));

  constructor(private readonly store: Store) {}

  init() {
    this.loadAktifKusurList('330');
    this.store.dispatch(
      Kk8140Actions.getYuzeyKusurKaydiList({ bobinNo: 'C2110000010000' })
    );
  }

  loadAktifKusurList(hatNo: string) {
    this.store.dispatch(
      Kk8140Actions.getButunAktifKusurList({
        hatNo,
      })
    );
  }

  updateYuzeyKusurDegerleriState(kkUretimYuzeyKusuru: KkUretimYuzeyKusuru[]) {
    this.store.dispatch(
      Kk8140Actions.updateYuzeyKusurDegerleri({ kkUretimYuzeyKusuru })
    );
  }

  getYuzeyKusurKaydi(bobinNo: string) {
    this.store.dispatch(Kk8140Actions.getYuzeyKusurKaydiList({ bobinNo }));
  }
}
