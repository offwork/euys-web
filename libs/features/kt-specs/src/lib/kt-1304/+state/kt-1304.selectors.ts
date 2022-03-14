import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1304_FEATURE_KEY, State } from './kt-1304.reducer';

// Lookup the 'Kt1304' feature state managed by NgRx
export const getKt1304State = createFeatureSelector<State>(KT_1304_FEATURE_KEY);

export const getKt1304Loaded = createSelector(
  getKt1304State,
  (state: State) => state.loaded
);

export const getKt1304LoadedUrunler = createSelector(
  getKt1304State,
  (state: State) => state.loadedUrunler
);

export const getKt1304LoadedCelikler = createSelector(
  getKt1304State,
  (state: State) => state.loadedCelikler
);

export const getKt1304Error = createSelector(
  getKt1304State,
  (state: State) => state.error
);

export const getKt1304Data = createSelector(
  getKt1304State,
  (state: State) => state.data
);

export const getKt1304AnatabloKomboList = createSelector(
  getKt1304State,
  (state: State) => state.anatabloKomboList
);

export const getKt1304Urunler = createSelector(
  getKt1304State,
  (state: State) => state.urunler
);

export const getKt1304Celikler = createSelector(
  getKt1304State,
  (state: State) => state.celikler
);

export const getKt1304DefaultRow = createSelector(
  getKt1304State,
  (state: State) => state.defaultRow
);
