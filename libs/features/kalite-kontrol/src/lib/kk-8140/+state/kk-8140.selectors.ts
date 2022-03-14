import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KK_8140_FEATURE_KEY, State } from './kk-8140.reducer';

export const getKk8140State = createFeatureSelector<State>(KK_8140_FEATURE_KEY);

export const selectYuzeyKusuruVarMi = createSelector(
  getKk8140State,
  (state: State) => state.yuzeyKusuruVarMi
);

export const selectDisableYuzeyKusuruVarMi = createSelector(
  getKk8140State,
  (state: State) => state.disableYuzeyKusuruVarMi
);

export const getYuzeyKusurKaydiList = createSelector(
  getKk8140State,
  (state: State) => state.yuzeyKusurKaydiList
);

export const getYuzeyKusurKaydiListLoaded = createSelector(
  getKk8140State,
  (state: State) => state.yuzeyKusurKaydiListLoaded
);

export const selectButunAktifKusurList = createSelector(
  getKk8140State,
  (state: State) => state.butunAktifKusurList
);

export const selectButunAktifKusurListLoaded = createSelector(
  getKk8140State,
  (state: State) => state.butunAktifKusurListLoaded
);

export const selectDefaultYuzeyKusurKodu = createSelector(
  getKk8140State,
  (state: State) => state.defaultYuzeyKusurKodu
);

export const selectDispoze = createSelector(
  getKk8140State,
  (state: State) => state.dispoze
);

export const selectMinDerece = createSelector(
  getKk8140State,
  (state: State) => state.minDispozeKusurDerecesi
);
