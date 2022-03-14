import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PFDM_3104_FEATURE_KEY, State } from './pfdm-3104.reducer';

// Lookup the 'Pfdm3104' feature state managed by NgRx
export const getPfdm3104State = createFeatureSelector<State>(
  PFDM_3104_FEATURE_KEY
);

export const getPfdm3104Loaded = createSelector(
  getPfdm3104State,
  (state: State) => state.loaded
);

export const getPfdm3104Error = createSelector(
  getPfdm3104State,
  (state: State) => state.error
);

export const getPfdm3104Data = createSelector(
  getPfdm3104State,
  (state: State) => state.data
);

export const getPfdm3104DefaultRow = createSelector(
  getPfdm3104State,
  (state: State) => state.defaultRow
);
