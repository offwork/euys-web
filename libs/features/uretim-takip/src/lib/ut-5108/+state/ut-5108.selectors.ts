import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UT_5108_FEATURE_KEY, State } from './ut-5108.reducer';

// Lookup the 'Ut5108' feature state managed by NgRx
export const getUt5108State = createFeatureSelector<State>(UT_5108_FEATURE_KEY);

export const getUt5108Loaded = createSelector(
  getUt5108State,
  (state: State) => state.loaded
);
export const getUt5108Error = createSelector(
  getUt5108State,
  (state: State) => state.error
);
export const getUt5108Data = createSelector(
  getUt5108State,
  (state: State) => state.data
);
export const getUt5108DataLog = createSelector(
  getUt5108State,
  (state: State) => state.dataLog
);
export const getUt5108VardiyaUretimleri = createSelector(
  getUt5108State,
  (state: State) => state.vardiyaUretimleri
);
export const getUt5108Code = createSelector(
  getUt5108State,
  (state: State) => state.utIsletmeHaddeYagEmulsiyonCode
);
export const getUt5108VardiyaNoList = createSelector(
  getUt5108State,
  (state: State) => state.vardiyaNoList
);
