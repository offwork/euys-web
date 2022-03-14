import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  State,
  YILLIK_URETIM_PLANI_FEATURE_KEY,
} from './yillik-uretim-plani.reducer';

// Lookup the 'YillikUretimPlani' feature state managed by NgRx
export const getYillikUretimPlaniState = createFeatureSelector<State>(
  YILLIK_URETIM_PLANI_FEATURE_KEY
);

export const getLoaded = createSelector(
  getYillikUretimPlaniState,
  (state: State) => state.loaded
);

export const getOzet = createSelector(
  getYillikUretimPlaniState,
  (state: State) => state.ozet
);

export const getUrunBazindaList = createSelector(
  getYillikUretimPlaniState,
  (state: State) => state.urunBazindaList
);

export const getKapasiteBazindaList = createSelector(
  getYillikUretimPlaniState,
  (state: State) => state.kapasiteBazindaList
);

export const getRumuzBazindaList = createSelector(
  getYillikUretimPlaniState,
  (state: State) => state.rumuzBazindaList
);

export const getUretimHedefleriList = createSelector(
  getYillikUretimPlaniState,
  (state: State) => state.uretimHedefleriList
);

export const getPlanliDuruslar = createSelector(
  getYillikUretimPlaniState,
  (state: State) => state.planliDuruslar
);

export const getPlanliDuruslarTesisAdlari = createSelector(
  getYillikUretimPlaniState,
  (state: State) => state.planliDuruslarTesisAdlari
);
