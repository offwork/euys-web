import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KK_8117_FEATURE_KEY, State } from './kk-8117.reducer';

export const getKk8117State = createFeatureSelector<State>(KK_8117_FEATURE_KEY);

export const getyuzeyKusurKaydiList = createSelector(
  getKk8117State,
  (state: State) => state.yuzeyKusurKaydiList
);

export const getyuzeyKusurKaydiListLoaded = createSelector(
  getKk8117State,
  (state: State) => state.yuzeyKusurKaydiListLoaded
);
