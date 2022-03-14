import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UP_3001_FEATURE_KEY, State } from './up-3001.reducer';

// Lookup the 'Up3001' feature state managed by NgRx
export const getUp3001State = createFeatureSelector<State>(UP_3001_FEATURE_KEY);

export const getStage = createSelector(
  getUp3001State,
  (state: State) => state.stage
);
