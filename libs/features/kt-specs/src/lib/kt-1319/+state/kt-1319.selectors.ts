import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1319_FEATURE_KEY, State } from './kt-1319.reducer';

// Lookup the 'Kt1319' feature state managed by NgRx
export const getKt1319State = createFeatureSelector<State>(KT_1319_FEATURE_KEY);

export const getKt1319Loaded = createSelector(
  getKt1319State,
  (state: State) => state.loaded
);

export const getKt1319LoadedUrunler = createSelector(
  getKt1319State,
  (state: State) => state.loadedUrunler
);

export const getKt1319LoadedCelikler = createSelector(
  getKt1319State,
  (state: State) => state.loadedCelikler
);

export const getKt1319Error = createSelector(
  getKt1319State,
  (state: State) => state.error
);

export const getKt1319Data = createSelector(
  getKt1319State,
  (state: State) => state.data
);

export const getKt1319AnatabloKomboList = createSelector(
  getKt1319State,
  (state: State) => state.anatabloKomboList
);

export const getKt1319Urunler = createSelector(
  getKt1319State,
  (state: State) => state.urunler
);

export const getKt1319Celikler = createSelector(
  getKt1319State,
  (state: State) => state.celikler
);

export const getKt1319DefaultRow = createSelector(
  getKt1319State,
  (state: State) => state.defaultRow
);
