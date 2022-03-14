import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KK_8116_FEATURE_KEY, State } from './kk-8116.reducer';

export const getKk8116State = createFeatureSelector<State>(KK_8116_FEATURE_KEY);

export const selectYuzeyKusuruVarMi = createSelector(
  getKk8116State,
  (state: State) => state.yuzeyKusuruVarMi
);

export const selectDisableYuzeyKusuruVarMi = createSelector(
  getKk8116State,
  (state: State) => state.disableYuzeyKusuruVarMi
);

export const getYuzeyKusurKaydiList = createSelector(
  getKk8116State,
  (state: State) => state.yuzeyKusurKaydiList
);

export const getYuzeyKusurKaydiListLoaded = createSelector(
  getKk8116State,
  (state: State) => state.yuzeyKusurKaydiListLoaded
);

export const selectButunAktifKusurList = createSelector(
  getKk8116State,
  (state: State) => state.butunAktifKusurList
);

export const selectButunAktifKusurListLoaded = createSelector(
  getKk8116State,
  (state: State) => state.butunAktifKusurListLoaded
);

export const selectDefaultYuzeyKusurKodu = createSelector(
  getKk8116State,
  (state: State) => state.defaultYuzeyKusurKodu
);

export const selectDispoze = createSelector(
  getKk8116State,
  (state: State) => state.dispoze
);

export const selectMinDerece = createSelector(
  getKk8116State,
  (state: State) => state.minDispozeKusurDerecesi
);
