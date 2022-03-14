import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AYLIK_URETIM_PLANI_FEATURE_KEY,
  State,
} from './aylik-uretim-plani.reducer';

// Lookup the 'AylikUretimPlani' feature state managed by NgRx
export const getAylikUretimPlaniState = createFeatureSelector<State>(
  AYLIK_URETIM_PLANI_FEATURE_KEY
);

export const getLoading = createSelector(
  getAylikUretimPlaniState,
  (state: State) => state.loading
);

export const getYupAylikAnaModel = createSelector(
  getAylikUretimPlaniState,
  (state: State) => state.yupAylikAnaModel
);
export const getYupAylikNihaiMamulModelList = createSelector(
  getAylikUretimPlaniState,
  (state: State) => state.yupAylikNihaiMamulModelList
);
export const getYupAylikUretimPlaniModelList = createSelector(
  getAylikUretimPlaniState,
  (state: State) => state.yupAylikUretimPlaniModelList
);
