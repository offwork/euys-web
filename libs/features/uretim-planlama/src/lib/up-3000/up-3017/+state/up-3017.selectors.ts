import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, UP_3017_FEATURE_KEY } from './up-3017.reducer';

// Lookup the 'Up3017' feature state managed by NgRx
export const getUp3017State = createFeatureSelector<State>(UP_3017_FEATURE_KEY);

export const getKapasiteRaporGrubuList = createSelector(
  getUp3017State,
  (state: State) => state.kapasiteRaporGrubuList
);
