import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PFDM_3103_FEATURE_KEY, State } from './pfdm-3103.reducer';

// Lookup the 'Pfdm3103' feature state managed by NgRx
export const getPfdm3103State = createFeatureSelector<State>(
  PFDM_3103_FEATURE_KEY
);

export const getPfdm3103Loaded = createSelector(
  getPfdm3103State,
  (state: State) => state.loaded
);

export const getPfdm3103Error = createSelector(
  getPfdm3103State,
  (state: State) => state.error
);

export const getPfdm3103Data = createSelector(
  getPfdm3103State,
  (state: State) => state.data
);

export const getPfdm3103DefaultRow = createSelector(
  getPfdm3103State,
  (state: State) => state.defaultRow
);
