import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UT_5107_FEATURE_KEY, State } from './ut-5107.reducer';

// Lookup the 'Ut5107' feature state managed by NgRx
export const getUt5107State = createFeatureSelector<State>(UT_5107_FEATURE_KEY);

export const getUt5107Loaded = createSelector(
  getUt5107State,
  (state: State) => state.loaded
);
export const getUt5107Error = createSelector(
  getUt5107State,
  (state: State) => state.error
);
export const getUt5107Data = createSelector(
  getUt5107State,
  (state: State) => state.data
);
export const getUt5107DataLog = createSelector(
  getUt5107State,
  (state: State) => state.dataLog
);
export const getUt5107VardiyaUretimleri = createSelector(
  getUt5107State,
  (state: State) => state.vardiyaUretimleri
);
export const getUt5107Code = createSelector(
  getUt5107State,
  (state: State) => state.utIsletmeHaddeYagEmulsiyonCode
);
export const getUt5107VardiyaNoList = createSelector(
  getUt5107State,
  (state: State) => state.vardiyaNoList
);
