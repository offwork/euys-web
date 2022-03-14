import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1362_FEATURE_KEY, State } from './kt-1362.reducer';

// Lookup the 'Kt1362' feature state managed by NgRx
export const getKt1362State = createFeatureSelector<State>(KT_1362_FEATURE_KEY);

export const getKt1362Loaded = createSelector(
  getKt1362State,
  (state: State) => state.loaded
);
export const getKt1362LoadedUrunler = createSelector(
  getKt1362State,
  (state: State) => state.loadedUrunler
);

export const getKt1362LoadedCelikler = createSelector(
  getKt1362State,
  (state: State) => state.loadedCelikler
);
export const getKt1362Data = createSelector(
  getKt1362State,
  (state: State) => state.data
);

export const getKt1362AnatabloKomboList = createSelector(
  getKt1362State,
  (state: State) => state.anatabloKomboList
);

export const getKt1362Urunler = createSelector(
  getKt1362State,
  (state: State) => state.urunler
);

export const getKt1362Celikler = createSelector(
  getKt1362State,
  (state: State) => state.celikler
);

export const getKt1362DefaultRow = createSelector(
  getKt1362State,
  (state: State) => state.defaultRow
);
