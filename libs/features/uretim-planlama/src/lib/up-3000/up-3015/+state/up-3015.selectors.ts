import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, UP_3015_FEATURE_KEY } from './up-3015.reducer';

// Lookup the 'Up3015' feature state managed by NgRx
export const getUp3015State = createFeatureSelector<State>(UP_3015_FEATURE_KEY);

export const getRumuzList = createSelector(
  getUp3015State,
  (state: State) => state.rumuzList
);
