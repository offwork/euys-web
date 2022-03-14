import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UT_5106_FEATURE_KEY, State } from './ut-5106.reducer';

// Lookup the 'Ut5106' feature state managed by NgRx
export const getUt5106State = createFeatureSelector<State>(UT_5106_FEATURE_KEY);

export const getUt5106Loaded = createSelector(
  getUt5106State,
  (state: State) => state.loaded
);
export const getUt5106Error = createSelector(
  getUt5106State,
  (state: State) => state.error
);
export const getUt5106Data = createSelector(
  getUt5106State,
  (state: State) => state.data
);
export const getUt5106DataLog = createSelector(
  getUt5106State,
  (state: State) => state.dataLog
);
export const getUt5106VardiyaUretimleri = createSelector(
  getUt5106State,
  (state: State) => state.vardiyaUretimleri
);
export const getUt5106Code = createSelector(
  getUt5106State,
  (state: State) => state.utAsitlemeRejenerasyonCode
);
export const getUt5106VardiyaNoList = createSelector(
  getUt5106State,
  (state: State) => state.vardiyaNoList
);
export const getUt5106UtAsitlemeRejenerasyonModelList = createSelector(
  getUt5106State,
  (state: State) => state.utAsitlemeRejenerasyonModelList
);
