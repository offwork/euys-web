import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KK_8141_FEATURE_KEY, State } from './kk-8141.reducer';

export const getKk8141State = createFeatureSelector<State>(KK_8141_FEATURE_KEY);

export const getYuzeyKusurKaydiList = createSelector(
  getKk8141State,
  (state: State) => state.yuzeyKusurKaydiList
);

export const getYuzeyKusurKaydiListLoaded = createSelector(
  getKk8141State,
  (state: State) => state.yuzeyKusurKaydiListLoaded
);
