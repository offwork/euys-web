import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UP_3010_FEATURE_KEY, State} from './up-3010.reducer';

// Lookup the 'Up3010' feature state managed by NgRx
export const getUp3010State = createFeatureSelector<State>(UP_3010_FEATURE_KEY);

export const getStage = createSelector(
  getUp3010State,
  (state: State) => state.stage
);


