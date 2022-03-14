import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UP_3001_FEATURE_KEY, State } from './up-3021.reducer';

// Lookup the 'Up3021' feature state managed by NgRx
export const getUp3021State = createFeatureSelector<State>(UP_3001_FEATURE_KEY);

export const getStage = createSelector(
  getUp3021State,
  (state: State) => state.stage
);

export const getData = createSelector(
  getUp3021State,
  (state: State) => state.data
);

export const getTesisAdlari = createSelector(
  getUp3021State,
  (state: State) => state.tesisAdlari
);
