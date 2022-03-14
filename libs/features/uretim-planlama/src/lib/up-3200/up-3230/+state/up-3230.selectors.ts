import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, UP_3230_FEATURE_KEY } from './up-3230.reducer';

// Lookup the 'Up3230' feature state managed by NgRx
export const getUp3230State = createFeatureSelector<State>(UP_3230_FEATURE_KEY);

export const getFailedUpdateList = createSelector(
  getUp3230State,
  (state: State) => state.failedUpdateList
);

export const getProgress = createSelector(
  getUp3230State,
  (state: State) => state.progress
);
