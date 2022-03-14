import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UP_3001_FEATURE_KEY, State } from './up-3030.reducer';

// Lookup the 'Up3030' feature state managed by NgRx
export const getUp3030State = createFeatureSelector<State>(UP_3001_FEATURE_KEY);

export const getStage = createSelector(
  getUp3030State,
  (state: State) => state.stage
);

export const getData = createSelector(
  getUp3030State,
  (state: State) => state.data
);

export const getpfUrunGruplari = createSelector(
  getUp3030State,
  (state: State) => state.pfUrunGruplari
);

export const getIslemDurum = createSelector(
  getUp3030State,
  (state: State) => state.islemDurum
);
