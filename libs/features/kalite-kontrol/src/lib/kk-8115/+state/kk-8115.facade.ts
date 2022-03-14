import { Injectable } from '@angular/core';
import {
  BobinKalinlikDegerleri,
  HSM2UretimDegerleri,
  KkUretimYuzeyKusuru,
  QCOnayModel,
} from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import { Hsm2QcOptions } from '../models/hsm2-options';
import * as Kk8115Actions from './kk-8115.actions';
import * as Kk8115Selectors from './kk-8115.selectors';
@Injectable()
export class Kk8115Facade {
  stepIndex$ = this.store.pipe(select(Kk8115Selectors.selectStepIndex));
  error$ = this.store.pipe(select(Kk8115Selectors.selectKk8115Error));
  hsmBobinList$ = this.store.pipe(select(Kk8115Selectors.selectHSMBobinList));
  hsmBobinListLoaded$ = this.store.pipe(
    select(Kk8115Selectors.selectHSMBobinListLoaded)
  );
  bagimsizMesajList$ = this.store.pipe(
    select(Kk8115Selectors.selectBagimsizMesajList)
  );
  bagimsizMesajListLoaded$ = this.store.pipe(
    select(Kk8115Selectors.selectBagimsizMesajListLoaded)
  );
  bagimsizNumuneList$ = this.store.pipe(
    select(Kk8115Selectors.selectBagimsizNumuneList)
  );
  bagimsizNumuneListLoaded$ = this.store.pipe(
    select(Kk8115Selectors.selectBagimsizNumuneListLoaded)
  );

  slabBilgisi$ = this.store.pipe(select(Kk8115Selectors.selectSlabBilgisi));

  slabBilgisiLoaded$ = this.store.pipe(
    select(Kk8115Selectors.selectSlabBilgisiLoaded)
  );
  bobinKalinlikDegerleri$ = this.store.pipe(
    select(Kk8115Selectors.selectBobinKalinlikDegerleri)
  );
  kabaHaddelemePasoLoaded$ = this.store.pipe(
    select(Kk8115Selectors.selectKabaHaddelemePasoLoaded)
  );
  kabaHaddelemePaso$ = this.store.pipe(
    select(Kk8115Selectors.selectKabaHaddelemePaso)
  );
  fmPratigiBilgileri$ = this.store.pipe(
    select(Kk8115Selectors.selectFmPratigiBilgileri)
  );
  fmPratigiBilgileriLoaded$ = this.store.pipe(
    select(Kk8115Selectors.selectFmPratigiBilgileriLoaded)
  );
  qcKayitBilgileri$ = this.store.pipe(
    select(Kk8115Selectors.selectQcKayitBilgileri)
  );
  qcKayitBilgileriLoaded$ = this.store.pipe(
    select(Kk8115Selectors.selectQcKayitBilgileriLoaded)
  );
  uretimDegerleri$ = this.store.pipe(
    select(Kk8115Selectors.selectUretimDegerleri)
  );
  bobinAcmaKontrol$ = this.store.pipe(
    select(Kk8115Selectors.selectBobinAcmaKontrol)
  );
  numuneAl$ = this.store.pipe(select(Kk8115Selectors.selectNumuneAl));
  standartNumuneIsareti$ = this.store.pipe(
    select(Kk8115Selectors.selectStandartNumuneIsareti)
  );
  showNumuneAlCombo$ = this.store.pipe(
    select(Kk8115Selectors.selectShowNumuneAlCombo)
  );
  yuzeyKusuruVarMi$ = this.store.pipe(
    select(Kk8115Selectors.selectYuzeyKusuruVarMi)
  );
  disableYuzeyKusuruVarMi$ = this.store.pipe(
    select(Kk8115Selectors.selectDisableYuzeyKusuruVarMi)
  );

  yuzeyKusurKaydiList$ = this.store.pipe(
    select(Kk8115Selectors.getYuzeyKusurKaydiList)
  );

  yuzeyKusurKaydiListLoaded$ = this.store.pipe(
    select(Kk8115Selectors.getYuzeyKusurKaydiListLoaded)
  );

  butunAktifKusurListLoaded$ = this.store.pipe(
    select(Kk8115Selectors.selectButunAktifKusurListLoaded)
  );

  butunAktifKusurList$ = this.store.pipe(
    select(Kk8115Selectors.selectButunAktifKusurList)
  );

  defaultYuzeyKusurKodu$ = this.store.pipe(
    select(Kk8115Selectors.selectDefaultYuzeyKusurKodu)
  );

  dispoze$ = this.store.pipe(select(Kk8115Selectors.selectDispoze));

  minDerece$ = this.store.pipe(select(Kk8115Selectors.selectMinDerece));

  qcOnay$ = this.store.pipe(select(Kk8115Selectors.selectQcOnay));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(Kk8115Actions.loadHSMBobinList());
    this.store.dispatch(Kk8115Actions.getButunAktifKusurList({ hatNo: '330' }));
  }

  getBagimsizNumuneEkranBilgileri(bobinNo: string) {
    this.store.dispatch(Kk8115Actions.loadBagimsizNumuneList({ bobinNo }));
    this.store.dispatch(Kk8115Actions.loadBagimsizMesajList({ bobinNo }));
  }

  getSlabBilgisi(hatNo: string, bobinNo: string) {
    this.store.dispatch(Kk8115Actions.getSlabBilgisi({ hatNo, bobinNo }));
  }
  resetSlabBilgisi() {
    this.store.dispatch(Kk8115Actions.resetSlabBilgisi());
  }
  resetFmBilgileri() {
    this.store.dispatch(Kk8115Actions.resetFmPratigiBilgileri());
  }
  getFmPratigiBilgileri(hatNo: string, bobinNo: string) {
    this.store.dispatch(
      Kk8115Actions.getFmPratigiBilgileri({ hatNo, bobinNo })
    );
  }
  resetKabaHaddelemePaso() {
    this.store.dispatch(Kk8115Actions.resetKabaHaddelemePaso());
  }
  getKabaHaddelemePaso(hatNo: string, bobinNo: string) {
    this.store.dispatch(Kk8115Actions.getKabaHaddelemePaso({ hatNo, bobinNo }));
  }

  getQcKayitBilgileri(bobinNo: string) {
    this.store.dispatch(
      Kk8115Actions.getQCKayitBilgileri({
        bobinNo,
        hatNo: '332',
        qcOnayYapilmis: false,
      })
    );
  }

  updateBobinKalinlikDegerleriState(
    bobinKalinlikDegerleri: BobinKalinlikDegerleri
  ) {
    this.store.dispatch(
      Kk8115Actions.updateBobinKalinlikDegerleri({ bobinKalinlikDegerleri })
    );
  }

  updateAciklama(value: string) {
    this.store.dispatch(Kk8115Actions.updateAciklama({ aciklama: value }));
  }

  resetAciklama() {
    this.store.dispatch(Kk8115Actions.resetAciklama());
  }

  updateHsm2QcOptions(options: Hsm2QcOptions) {
    this.store.dispatch(Kk8115Actions.updateHsm2QcOptions({ options }));
  }

  updateYuzeyKusurDegerleriState(kkUretimYuzeyKusuru: KkUretimYuzeyKusuru[]) {
    this.store.dispatch(
      Kk8115Actions.updateYuzeyKusurDegerleri({ kkUretimYuzeyKusuru })
    );
  }

  updateUretimDegerleri(uretimDegerleri: HSM2UretimDegerleri) {
    this.store.dispatch(
      Kk8115Actions.updateHsm2UretimDegerleri({ uretimDegerleri })
    );
  }

  qcKayit(qcOnay: QCOnayModel) {
    this.store.dispatch(Kk8115Actions.qcKayit({ qcOnay }));
  }

  goTo(index: number) {
    this.store.dispatch(Kk8115Actions.setCurrentStepIndex({ index }));
  }
}
