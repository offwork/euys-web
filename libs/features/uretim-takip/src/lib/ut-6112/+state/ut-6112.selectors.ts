import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State, UT_6112_FEATURE_KEY} from './ut-6112.reducer';

// Lookup the 'Ut6112' feature state managed by NgRx
export const getUt6112State = createFeatureSelector<State>(UT_6112_FEATURE_KEY);

export const getUt6112Loaded = createSelector(
  getUt6112State,
  (state: State) => state.loaded
);

export const getUt6112Error = createSelector(
  getUt6112State,
  (state: State) => state.error
);

export const getUt6112Data = createSelector(
  getUt6112State,
  (state: State) => state.data
);
