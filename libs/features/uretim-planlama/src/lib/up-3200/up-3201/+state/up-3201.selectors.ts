import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UP_3201_FEATURE_KEY, State } from './up-3201.reducer';

// Lookup the 'Up3201' feature state managed by NgRx
export const getUp3201State = createFeatureSelector<State>(UP_3201_FEATURE_KEY);

export const getUpHatVerimList = createSelector(
  getUp3201State,
  (state: State) => state.upHatVerimList
);

export const saveUpHatVerim = createSelector(
  getUp3201State,
  (state: State) => state.upHatVerim
);

export const getStage = createSelector(
  getUp3201State,
  (state: State) => state.stage
);
