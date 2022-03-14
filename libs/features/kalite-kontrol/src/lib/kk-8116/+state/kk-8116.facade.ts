import { Injectable } from '@angular/core';
import { KkUretimYuzeyKusuru } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Kk8116Actions from './kk-8116.actions';
import * as Kk8116Selectors from './kk-8116.selectors';

@Injectable()
export class Kk8116Facade {
  yuzeyKusuruVarMi$ = this.store.pipe(
    select(Kk8116Selectors.selectYuzeyKusuruVarMi)
  );
  disableYuzeyKusuruVarMi$ = this.store.pipe(
    select(Kk8116Selectors.selectDisableYuzeyKusuruVarMi)
  );

  yuzeyKusurKaydiList$ = this.store.pipe(
    select(Kk8116Selectors.getYuzeyKusurKaydiList)
  );

  yuzeyKusurKaydiListLoaded$ = this.store.pipe(
    select(Kk8116Selectors.getYuzeyKusurKaydiListLoaded)
  );

  butunAktifKusurListLoaded$ = this.store.pipe(
    select(Kk8116Selectors.selectButunAktifKusurListLoaded)
  );

  butunAktifKusurList$ = this.store.pipe(
    select(Kk8116Selectors.selectButunAktifKusurList)
  );

  defaultYuzeyKusurKodu$ = this.store.pipe(
    select(Kk8116Selectors.selectDefaultYuzeyKusurKodu)
  );

  dispoze$ = this.store.pipe(select(Kk8116Selectors.selectDispoze));

  minDerece$ = this.store.pipe(select(Kk8116Selectors.selectMinDerece));

  constructor(private readonly store: Store) {}

  init() {
    this.loadAktifKusurList('330');
    this.store.dispatch(
      Kk8116Actions.getYuzeyKusurKaydiList({ bobinNo: 'C2110000010000' })
    );
  }

  loadAktifKusurList(hatNo: string) {
    this.store.dispatch(
      Kk8116Actions.getButunAktifKusurList({
        hatNo,
      })
    );
  }

  updateYuzeyKusurDegerleriState(kkUretimYuzeyKusuru: KkUretimYuzeyKusuru[]) {
    this.store.dispatch(
      Kk8116Actions.updateYuzeyKusurDegerleri({ kkUretimYuzeyKusuru })
    );
  }

  getYuzeyKusurKaydi(bobinNo: string) {
    this.store.dispatch(Kk8116Actions.getYuzeyKusurKaydiList({ bobinNo }));
  }
}
