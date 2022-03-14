import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UP_3020_FEATURE_KEY, State } from './up-3020.reducer';

// Lookup the 'Up3020' feature state managed by NgRx
export const getUp3020State = createFeatureSelector<State>(UP_3020_FEATURE_KEY);

export const getStage = createSelector(
  getUp3020State,
  (state: State) => state.stage
);

export const getUpdateRecord = createSelector(
  getUp3020State,
  (state: State) => state.updateRecord
);
