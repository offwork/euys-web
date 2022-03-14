import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UP_3003_FEATURE_KEY, State } from './up-3003.reducer';

// Lookup the 'Up3003' feature state managed by NgRx
export const getUp3003State = createFeatureSelector<State>(UP_3003_FEATURE_KEY);

export const getStage = createSelector(
  getUp3003State,
  (state: State) => state.stage
);
