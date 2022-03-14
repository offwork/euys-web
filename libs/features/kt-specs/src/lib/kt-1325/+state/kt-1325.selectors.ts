import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1325_FEATURE_KEY, State } from './kt-1325.reducer';

// Lookup the 'Kt1325' feature state managed by NgRx
export const getKt1325State = createFeatureSelector<State>(KT_1325_FEATURE_KEY);

export const getKt1325Loaded = createSelector(
  getKt1325State,
  (state: State) => state.loaded
);

export const getKt1325LoadedUrunler = createSelector(
  getKt1325State,
  (state: State) => state.loadedUrunler
);

export const getKt1325LoadedCelikler = createSelector(
  getKt1325State,
  (state: State) => state.loadedCelikler
);

export const getKt1325Error = createSelector(
  getKt1325State,
  (state: State) => state.error
);

export const getKt1325Data = createSelector(
  getKt1325State,
  (state: State) => state.data
);

export const getKt1325AnatabloKomboList = createSelector(
  getKt1325State,
  (state: State) => state.anatabloKomboList
);

export const getKt1325Urunler = createSelector(
  getKt1325State,
  (state: State) => state.urunler
);

export const getKt1325Celikler = createSelector(
  getKt1325State,
  (state: State) => state.celikler
);

export const getKt1325DefaultRow = createSelector(
  getKt1325State,
  (state: State) => state.defaultRow
);
