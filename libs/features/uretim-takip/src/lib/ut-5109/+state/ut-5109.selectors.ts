import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UT_5109_FEATURE_KEY, State } from './ut-5109.reducer';

// Lookup the 'Ut5109' feature state managed by NgRx
export const getUt5109State = createFeatureSelector<State>(UT_5109_FEATURE_KEY);

export const getUt5109Loaded = createSelector(
  getUt5109State,
  (state: State) => state.loaded
);

export const getUt5109Error = createSelector(
  getUt5109State,
  (state: State) => state.error
);

export const getUt5109MerkezHaddeListesi = createSelector(
  getUt5109State,
  (state: State) => state.data
);

export const getUt5109LogListesi = createSelector(
  getUt5109State,
  (state: State) => state.loglar
);

export const getUt5109Message = createSelector(
  getUt5109State,
  (state: State) => state.utMerkezHaddeYagEmulsiyonModelCode
);

export const getUt5109UpdatedData = createSelector(
  getUt5109State,
  (state: State) => state.updatedData
);

export const getUt5109DefaultRow = createSelector(
  getUt5109State,
  (state: State) => state.defaultRow
);
