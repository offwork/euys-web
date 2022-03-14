import { Injectable } from '@angular/core';
import {
  BagimsizNumuneModel,
  CMSMpratigiModelListQueryModel,
  EvetHayir,
  HSM1UretimDegerleri,
  KkUretimYuzeyKusuru,
  QcBobinListQueryModel,
  QCKayitBilgileri,
} from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import * as Kk8139Actions from './kk-8139.actions';
import * as Kk8139Selectors from './kk-8139.selectors';

@Injectable()
export class Kk8139Facade {
  hsmBobinList$ = this.store.pipe(
    select(Kk8139Selectors.getKk8139HsmBobinList)
  );

  hsmBobinListLoaded$ = this.store.pipe(
    select(Kk8139Selectors.getKk8139HsmBobinListLoaded)
  );

  cmPratigiList$ = this.store.pipe(
    select(Kk8139Selectors.getKk8139CmPratigiList)
  );

  cmPratigiListLoaded$ = this.store.pipe(
    select(Kk8139Selectors.getKk8139CmPratigiListLoaded)
  );

  smPratigiList$ = this.store.pipe(
    select(Kk8139Selectors.getKk8139SmPratigiList)
  );

  smPratigiListLoaded$ = this.store.pipe(
    select(Kk8139Selectors.getKk8139SmPratigiListLoaded)
  );

  bagimsizMesajList$ = this.store.pipe(
    select(Kk8139Selectors.getKkBagimsizMesajList)
  );

  bagimsizMesajListLoaded$ = this.store.pipe(
    select(Kk8139Selectors.selectBagimsizMesajListLoaded)
  );

  bagimsizNumune$ = this.store.pipe(
    select(Kk8139Selectors.selectBagimsizNumune)
  );

  bagimsizNumuneLoaded$ = this.store.pipe(
    select(Kk8139Selectors.selectBagimsizNumuneLoaded)
  );

  yuzeyKusurKaydiList$ = this.store.pipe(
    select(Kk8139Selectors.getYuzeyKusurKaydiList)
  );

  yuzeyKusurKaydiListLoaded$ = this.store.pipe(
    select(Kk8139Selectors.getYuzeyKusurKaydiListLoaded)
  );

  qcKayitBilgileri$ = this.store.pipe(
    select(Kk8139Selectors.selectQcKayitBilgileri)
  );

  qcKayitBilgileriLoaded$ = this.store.pipe(
    select(Kk8139Selectors.selectQcKayitBilgileriLoaded)
  );

  tcrBilgileriList$ = this.store.pipe(
    select(Kk8139Selectors.selectTcrBilgileriList)
  );

  oncekiHatKusurList$ = this.store.pipe(
    select(Kk8139Selectors.selectOncekiHatKusurList)
  );

  butunAktifKusurListLoaded$ = this.store.pipe(
    select(Kk8139Selectors.selectButunAktifKusurListLoaded)
  );

  butunAktifKusurList$ = this.store.pipe(
    select(Kk8139Selectors.selectButunAktifKusurList)
  );

  defaultYuzeyKusurKodu$ = this.store.pipe(
    select(Kk8139Selectors.selectDefaultYuzeyKusurKodu)
  );

  dispoze$ = this.store.pipe(select(Kk8139Selectors.selectDispoze));

  minDerece$ = this.store.pipe(select(Kk8139Selectors.selectMinDerece));

  getBagimsizNumune(hatNo: string, bobinNo: string) {
    this.store.dispatch(
      Kk8139Actions.getBagimsizNumuneModelList({ hatNo, bobinNo })
    );
  }

  resetBagimsizNumune() {
    this.store.dispatch(Kk8139Actions.resetBagimsizNumune());
  }

  resetBobinList() {
    this.store.dispatch(Kk8139Actions.resetBobinList());
  }

  resetYuzeyKusur() {
    this.store.dispatch(Kk8139Actions.resetYuzeyKusur());
  }

  constructor(private readonly store: Store) {}

  init(data: QcBobinListQueryModel) {
    this.store.dispatch(Kk8139Actions.initOnayList({ data }));
    this.loadAktifKusurList('330');
  }

  loadAktifKusurList(hatNo: string) {
    this.store.dispatch(
      Kk8139Actions.getButunAktifKusurList({
        hatNo,
      })
    );
  }

  getBagimsizMesajList(bobinNo: string) {
    this.store.dispatch(Kk8139Actions.getBagimsizMesajList({ bobinNo }));
  }

  resetBagimsizMesajList() {
    this.store.dispatch(Kk8139Actions.resetBagimsizMesajList());
  }

  updateBagimsizNumuneListState(
    bagimsizNumuneList: BagimsizNumuneModel[]
  ): void {
    this.store.dispatch(
      Kk8139Actions.updateBagimsizNumuneList({ bagimsizNumuneList })
    );
  }

  getCmPratigiList(data: CMSMpratigiModelListQueryModel): void {
    this.store.dispatch(Kk8139Actions.getCmPratigiList({ data }));
  }

  resetCmPratigiList() {
    this.store.dispatch(Kk8139Actions.resetCmPratigiList());
  }

  getSmPratigiList(data: CMSMpratigiModelListQueryModel) {
    this.store.dispatch(Kk8139Actions.getSmPratigiList({ data }));
  }

  resetSmPratigiList() {
    this.store.dispatch(Kk8139Actions.resetSmPratigiList());
  }

  updateYuzeyKusurDegerleriState(kkUretimYuzeyKusuru: KkUretimYuzeyKusuru[]) {
    this.store.dispatch(
      Kk8139Actions.updateYuzeyKusurDegerleri({ kkUretimYuzeyKusuru })
    );
  }

  /*
   *
   * Ekran 3 qcOnayBilgileri modelini getirir
   *
   */

  getQcKayitBilgileri(data: CMSMpratigiModelListQueryModel) {
    this.store.dispatch(Kk8139Actions.getQcKayitBilgileri({ data }));
  }

  resetQcKayitBilgileri() {
    this.store.dispatch(Kk8139Actions.resetQcKayitBilgileri());
  }

  setUretimDegerleri(uretimDegerleri: HSM1UretimDegerleri[]) {
    this.store.dispatch(Kk8139Actions.setUretimDegerleri({ uretimDegerleri }));
  }

  setNumuneAl(value: boolean) {
    let updated: QCKayitBilgileri;
    this.qcKayitBilgileri$.pipe().subscribe(qc => {
      updated = { ...qc, numuneAlAlaniDisabled: value };
    });
    this.store.dispatch(
      Kk8139Actions.setQcKayitBilgileri({ qcKayitBilgileri: updated })
    );
  }

  setYuzeyKusur(value: boolean) {
    let updated: QCKayitBilgileri;
    this.qcKayitBilgileri$.pipe().subscribe(qc => {
      updated = { ...qc, yuzeyKusuruVarMiAlaniDisabled: value };
    });
    this.store.dispatch(
      Kk8139Actions.setQcKayitBilgileri({ qcKayitBilgileri: updated })
    );
  }

  setBobinAcmaKontrol(value: boolean) {
    let updated: QCKayitBilgileri;
    this.qcKayitBilgileri$.pipe().subscribe(qc => {
      updated = {
        ...qc,
        bobinAcmaKontrolu: value ? EvetHayir.EVET : EvetHayir.HAYIR,
      };
    });
    this.store.dispatch(
      Kk8139Actions.setQcKayitBilgileri({ qcKayitBilgileri: updated })
    );
  }

  setUretimBilgileriAciklama(value: string) {
    let updated: QCKayitBilgileri;
    this.qcKayitBilgileri$.pipe().subscribe(qc => {
      updated = { ...qc, aciklama: value };
    });
    this.store.dispatch(
      Kk8139Actions.setQcKayitBilgileri({ qcKayitBilgileri: updated })
    );
  }

  updateUretimDegerleri(uretimDegerleri: HSM1UretimDegerleri) {
    this.store.dispatch(
      Kk8139Actions.updateHsm1UretimDegerleri({ uretimDegerleri })
    );
  }

  goTo(index: number) {
    this.store.dispatch(Kk8139Actions.setCurrentStepIndex({ index }));
  }
}
