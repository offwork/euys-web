import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, UP_3244_FEATURE_KEY } from './up-3244.reducer';

// Lookup the 'Up3244' feature state managed by NgRx
export const getUp3244State = createFeatureSelector<State>(UP_3244_FEATURE_KEY);

export const getImalatLotunHikayesiList = createSelector(
  getUp3244State,
  (state: State) => state.imalatLotunHikayesiList
);
