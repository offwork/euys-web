import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PFDM_3101_FEATURE_KEY, State } from './pfdm-3101.reducer';

// Lookup the 'Pfdm3101' feature state managed by NgRx
export const getPfdm3101State = createFeatureSelector<State>(
  PFDM_3101_FEATURE_KEY
);

export const getPfdm3101Loaded = createSelector(
  getPfdm3101State,
  (state: State) => state.loaded
);

export const getPfdm3101Error = createSelector(
  getPfdm3101State,
  (state: State) => state.error
);

export const getPfdm3101Data = createSelector(
  getPfdm3101State,
  (state: State) => state.data
);

export const getPfdm3101DefaultRow = createSelector(
  getPfdm3101State,
  (state: State) => state.defaultRow
);
