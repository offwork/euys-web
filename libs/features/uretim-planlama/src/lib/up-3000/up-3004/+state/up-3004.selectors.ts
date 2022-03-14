import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, UP_3004_FEATURE_KEY } from './up-3004.reducer';

// Lookup the 'Up3004' feature state managed by NgRx
export const getUp3004State = createFeatureSelector<State>(UP_3004_FEATURE_KEY);

export const getStage = createSelector(
  getUp3004State,
  (state: State) => state.stage
);

export const getLoading = createSelector(
  getUp3004State,
  (state: State) => state.loading
);

export const getData = createSelector(
  getUp3004State,
  (state: State) => state.data
);
