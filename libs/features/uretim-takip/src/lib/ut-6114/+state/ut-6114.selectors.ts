import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, UT_6114_FEATURE_KEY } from './ut-6114.reducer';

// Lookup the 'Ut6114' feature state managed by NgRx
export const getUt6114State = createFeatureSelector<State>(UT_6114_FEATURE_KEY);

export const getUt6114Loaded = createSelector(
  getUt6114State,
  (state: State) => state.loaded
);
export const getUt6114Error = createSelector(
  getUt6114State,
  (state: State) => state.error
);
export const getUt6114Data = createSelector(
  getUt6114State,
  (state: State) => state.data
);
export const getUt6114Listeler = createSelector(
  getUt6114State,
  (state: State) => state.listeler
);
