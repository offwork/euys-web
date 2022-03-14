import { createFeatureSelector, createSelector } from '@ngrx/store';
import { extractQCOnayModel } from '../utils/extractors';
import { KK_8115_FEATURE_KEY, State } from './kk-8115.reducer';

export const getKk8115State = createFeatureSelector<State>(KK_8115_FEATURE_KEY);

export const selectHSMBobinListLoaded = createSelector(
  getKk8115State,
  (state: State) => state.hsmBobinListLoaded
);

export const selectKk8115Error = createSelector(
  getKk8115State,
  (state: State) => state.error
);

export const selectHSMBobinList = createSelector(
  getKk8115State,
  (state: State) => state.hsmBobinList
);
export const selectSlabBilgisiLoaded = createSelector(
  getKk8115State,
  (state: State) => state.slabBilgisiLoaded
);

export const selectKabaHaddelemePasoLoaded = createSelector(
  getKk8115State,
  (state: State) => state.kabaHaddelemeBilgisiLoaded
);
export const get8115KabaHaddelemePasoList = createSelector(
  getKk8115State,
  (state: State) => state.kabaHaddelemeBilgisiLoaded
);

export const selectSlabBilgisi = createSelector(
  getKk8115State,
  (state: State) => state.slabBilgisi
);

export const selectBagimsizNumuneList = createSelector(
  getKk8115State,
  (state: State) => state.bagimsizNumuneList
);

export const selectBagimsizNumuneListLoaded = createSelector(
  getKk8115State,
  (state: State) => state.bagimsizNumuneListLoaded
);

export const selectBagimsizMesajList = createSelector(
  getKk8115State,
  (state: State) => state.bagimsizMesajList
);

export const selectBagimsizMesajListLoaded = createSelector(
  getKk8115State,
  (state: State) => state.bagimsizMesajListLoaded
);
export const selectKabaHaddelemePaso = createSelector(
  getKk8115State,
  (state: State) => state.kabaHaddelemeBilgisi
);
export const selectFmPratigiBilgileriLoaded = createSelector(
  getKk8115State,
  (state: State) => state.fmPratigiListLoaded
);
export const selectFmPratigiBilgileri = createSelector(
  getKk8115State,
  (state: State) => state.fmPratigiList
);

export const selectQcKayitBilgileri = createSelector(
  getKk8115State,
  (state: State) => state.qcKayitBilgileri
);

export const selectQcKayitBilgileriLoaded = createSelector(
  getKk8115State,
  (state: State) => state.qcKayitBilgileriLoaded
);

export const selectBobinKalinlikDegerleri = createSelector(
  selectQcKayitBilgileri,
  qcKayitBilgileri => qcKayitBilgileri.bobinKalinlikDegerleri
);

export const selectBobinAcmaKontrol = createSelector(
  getKk8115State,
  (state: State) => state.bobinAcmaKontrol
);

export const selectStandartNumuneIsareti = createSelector(
  selectQcKayitBilgileri,
  qcKayitBilgileri => qcKayitBilgileri.standartNumuneNoYeriAlinmaIsareti
);

export const selectShowNumuneAlCombo = createSelector(
  getKk8115State,
  (state: State) => state.showNumuneAlCombo
);

export const selectNumuneAl = createSelector(
  getKk8115State,
  (state: State) => state.numuneAl
);

export const selectYuzeyKusuruVarMi = createSelector(
  getKk8115State,
  (state: State) => state.yuzeyKusuruVarMi
);

export const selectDisableYuzeyKusuruVarMi = createSelector(
  getKk8115State,
  (state: State) => state.disableYuzeyKusuruVarMi
);

export const getYuzeyKusurKaydiList = createSelector(
  getKk8115State,
  (state: State) => state.yuzeyKusurKaydiList
);

export const getYuzeyKusurKaydiListLoaded = createSelector(
  getKk8115State,
  (state: State) => state.yuzeyKusurKaydiListLoaded
);

export const selectButunAktifKusurList = createSelector(
  getKk8115State,
  (state: State) => state.butunAktifKusurList
);

export const selectButunAktifKusurListLoaded = createSelector(
  getKk8115State,
  (state: State) => state.butunAktifKusurListLoaded
);

export const selectDefaultYuzeyKusurKodu = createSelector(
  getKk8115State,
  (state: State) => state.defaultYuzeyKusurKodu
);

export const selectDispoze = createSelector(
  getKk8115State,
  (state: State) => state.dispoze
);

export const selectMinDerece = createSelector(
  getKk8115State,
  (state: State) => state.minDispozeKusurDerecesi
);

export const selectQcOnay = createSelector(getKk8115State, (state: State) =>
  extractQCOnayModel(state)
);

export const selectStepIndex = createSelector(
  getKk8115State,
  (state: State) => state.stepIndex
);

export const selectUretimDegerleri = createSelector(
  selectQcKayitBilgileri,
  ({ hsm2UretimDegerleri }) => hsm2UretimDegerleri
);
