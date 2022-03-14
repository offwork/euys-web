import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, UP_3231_FEATURE_KEY } from './up-3231.reducer';

// Lookup the 'Up3231' feature state managed by NgRx
export const getUp3231State = createFeatureSelector<State>(UP_3231_FEATURE_KEY);

export const getFailedUpdateList = createSelector(
  getUp3231State,
  (state: State) => state.failedUpdateList
);

export const getProgress = createSelector(
  getUp3231State,
  (state: State) => state.progress
);
