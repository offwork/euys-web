import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, UP_3016_FEATURE_KEY } from './up-3016.reducer';

// Lookup the 'Up3016' feature state managed by NgRx
export const getUp3016State = createFeatureSelector<State>(UP_3016_FEATURE_KEY);

export const getKapasiteRaporGrubuList = createSelector(
  getUp3016State,
  (state: State) => state.kapasiteRaporGrubuList
);

export const getKapasiteRaporGrubuRumuzList = createSelector(
  getUp3016State,
  (state: State) => state.rumuzList
);

export const getKapasiteRaporGrubuProcessing = createSelector(
  getUp3016State,
  (state: State) => state.processing
);
