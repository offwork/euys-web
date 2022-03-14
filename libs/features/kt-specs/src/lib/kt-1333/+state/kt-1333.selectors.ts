import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1333_FEATURE_KEY, State } from './kt-1333.reducer';

// Lookup the 'Kt1333' feature state managed by NgRx
export const getKt1333State = createFeatureSelector<State>(KT_1333_FEATURE_KEY);

export const getKt1333Loaded = createSelector(
  getKt1333State,
  (state: State) => state.loaded
);

export const getKt1333LoadedUrunler = createSelector(
  getKt1333State,
  (state: State) => state.loadedUrunler
);

export const getKt1333LoadedCelikler = createSelector(
  getKt1333State,
  (state: State) => state.loadedCelikler
);

export const getKt1333Error = createSelector(
  getKt1333State,
  (state: State) => state.error
);

export const getKt1333Data = createSelector(
  getKt1333State,
  (state: State) => state.data
);

export const getKt1333AnatabloKomboList = createSelector(
  getKt1333State,
  (state: State) => state.anatabloKomboList
);

export const getKt1333Urunler = createSelector(
  getKt1333State,
  (state: State) => state.urunler
);

export const getKt1333Celikler = createSelector(
  getKt1333State,
  (state: State) => state.celikler
);

export const getKt1333DefaultRow = createSelector(
  getKt1333State,
  (state: State) => state.defaultRow
);
