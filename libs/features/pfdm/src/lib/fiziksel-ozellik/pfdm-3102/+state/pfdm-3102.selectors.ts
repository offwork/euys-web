import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PFDM_3102_FEATURE_KEY, State } from './pfdm-3102.reducer';

// Lookup the 'Pfdm3102' feature state managed by NgRx
export const getPfdm3102State = createFeatureSelector<State>(
  PFDM_3102_FEATURE_KEY
);

export const getPfdm3102Loaded = createSelector(
  getPfdm3102State,
  (state: State) => state.loaded
);

export const getPfdm3102Error = createSelector(
  getPfdm3102State,
  (state: State) => state.error
);

export const getPfdm3102Data = createSelector(
  getPfdm3102State,
  (state: State) => state.data
);

export const getPfdm3102DefaultRow = createSelector(
  getPfdm3102State,
  (state: State) => state.defaultRow
);
