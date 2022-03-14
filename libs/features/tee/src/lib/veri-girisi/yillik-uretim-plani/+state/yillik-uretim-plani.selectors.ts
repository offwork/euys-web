import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, YILLIK_URETIM_PLANI_FEATURE_KEY } from './yillik-uretim-plani.reducer';

// Lookup the 'YillikUretimPlani' feature state managed by NgRx
export const getYillikUretimPlaniState = createFeatureSelector<State>(YILLIK_URETIM_PLANI_FEATURE_KEY);

export const getYillikUretimPlaniLoaded = createSelector(getYillikUretimPlaniState, (state: State) => state.loaded);

export const getYillikUretimPlaniError = createSelector(getYillikUretimPlaniState, (state: State) => state.error);

export const getYillikUretimPlani = createSelector(
  getYillikUretimPlaniState,
  (state: State) => state.yillikUretimPlani
);
