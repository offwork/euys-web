import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1320_FEATURE_KEY, State } from './kt-1320.reducer';

// Lookup the 'Kt1320' feature state managed by NgRx
export const getKt1320State = createFeatureSelector<State>(KT_1320_FEATURE_KEY);

export const getKt1320Loaded = createSelector(
  getKt1320State,
  (state: State) => state.loaded
);

export const getKt1320LoadedUrunler = createSelector(
  getKt1320State,
  (state: State) => state.loadedUrunler
);

export const getKt1320LoadedCelikler = createSelector(
  getKt1320State,
  (state: State) => state.loadedCelikler
);

export const getKt1320Error = createSelector(
  getKt1320State,
  (state: State) => state.error
);

export const getKt1320Data = createSelector(
  getKt1320State,
  (state: State) => state.data
);

export const getKt1320AnatabloKomboList = createSelector(
  getKt1320State,
  (state: State) => state.anatabloKomboList
);

export const getKt1320Urunler = createSelector(
  getKt1320State,
  (state: State) => state.urunler
);

export const getKt1320Celikler = createSelector(
  getKt1320State,
  (state: State) => state.celikler
);

export const getKt1320DefaultRow = createSelector(
  getKt1320State,
  (state: State) => state.defaultRow
);
