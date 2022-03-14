import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, UP_3005_FEATURE_KEY } from './up-3005.reducer';

// Lookup the 'Up3005' feature state managed by NgRx
export const getUp3005State = createFeatureSelector<State>(UP_3005_FEATURE_KEY);

export const getLoading = createSelector(
  getUp3005State,
  (state: State) => state.loading
);

export const getData = createSelector(
  getUp3005State,
  (state: State) => state.data
);
