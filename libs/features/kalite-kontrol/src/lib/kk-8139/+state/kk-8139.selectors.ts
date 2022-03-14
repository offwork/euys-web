import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KK_8139_FEATURE_KEY, State } from './kk-8139.reducer';

// Lookup the 'Kk8139' feature state managed by NgRx
export const getKk8139State = createFeatureSelector<State>(KK_8139_FEATURE_KEY);

export const getKk8139HsmBobinList = createSelector(
  getKk8139State,
  (state: State) => state.hsmBobinList
);

export const getKk8139HsmBobinListLoaded = createSelector(
  getKk8139State,
  (state: State) => state.hsmBobinListLoaded
);

export const getKk8139CmPratigiList = createSelector(
  getKk8139State,
  (state: State) => state.cmPratigiList
);

export const getKk8139CmPratigiListLoaded = createSelector(
  getKk8139State,
  (state: State) => state.cmPratigiListLoaded
);

export const getKk8139SmPratigiList = createSelector(
  getKk8139State,
  (state: State) => state.smPratigiList
);

export const getKk8139SmPratigiListLoaded = createSelector(
  getKk8139State,
  (state: State) => state.smPratigiListLoaded
);

export const getKkBagimsizMesajList = createSelector(
  getKk8139State,
  (state: State) => state.bagimsizMesajList
);

export const selectBagimsizMesajListLoaded = createSelector(
  getKk8139State,
  (state: State) => state.bagimsizMesajListLoaded
);

export const selectBagimsizNumune = createSelector(
  getKk8139State,
  (state: State) => state.bagimsizNumuneList
);

export const selectBagimsizNumuneLoaded = createSelector(
  getKk8139State,
  (state: State) => state.bagimsizNumuneListLoaded
);

export const getYuzeyKusurKaydiList = createSelector(
  getKk8139State,
  (state: State) => state.yuzeyKusurKaydiList
);

export const getYuzeyKusurKaydiListLoaded = createSelector(
  getKk8139State,
  (state: State) => state.yuzeyKusurKaydiListLoaded
);

export const selectButunAktifKusurList = createSelector(
  getKk8139State,
  (state: State) => state.butunAktifKusurList
);

export const selectButunAktifKusurListLoaded = createSelector(
  getKk8139State,
  (state: State) => state.butunAktifKusurListLoaded
);
export const selectQcKayitBilgileri = createSelector(
  getKk8139State,
  (state: State) => state.qcKayitBilgileri
);

export const selectQcKayitBilgileriLoaded = createSelector(
  getKk8139State,
  (state: State) => state.qcKayitBilgileriLoaded
);

export const selectTcrBilgileriList = createSelector(
  getKk8139State,
  (state: State) => state.qcKayitBilgileri.tcrBilgileriListesi
);

export const selectOncekiHatKusurList = createSelector(
  getKk8139State,
  (state: State) => state.qcKayitBilgileri.oncekiHatKusurBilgileriListesi
);

export const selectDefaultYuzeyKusurKodu = createSelector(
  getKk8139State,
  (state: State) => state.defaultYuzeyKusurKodu
);

export const selectDispoze = createSelector(
  getKk8139State,
  (state: State) => state.dispoze
);

export const selectMinDerece = createSelector(
  getKk8139State,
  (state: State) => state.minDispozeKusurDerecesi
);
