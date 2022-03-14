import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1330_FEATURE_KEY, State } from './kt-1330.reducer';

// Lookup the 'Kt1330' feature state managed by NgRx
export const getKt1330State = createFeatureSelector<State>(KT_1330_FEATURE_KEY);

export const getKt1330Loaded = createSelector(
  getKt1330State,
  (state: State) => state.loaded
);

export const getKt1330LoadedUrunler = createSelector(
  getKt1330State,
  (state: State) => state.loadedUrunler
);

export const getKt1330LoadedCelikler = createSelector(
  getKt1330State,
  (state: State) => state.loadedCelikler
);

export const getKt1330Error = createSelector(
  getKt1330State,
  (state: State) => state.error
);

export const getKt1330Data = createSelector(
  getKt1330State,
  (state: State) => state.data
);

export const getKt1330AnatabloKomboList = createSelector(
  getKt1330State,
  (state: State) => state.anatabloKomboList
);

export const getKt1330Urunler = createSelector(
  getKt1330State,
  (state: State) => state.urunler
);

export const getKt1330Celikler = createSelector(
  getKt1330State,
  (state: State) => state.celikler
);

export const getKt1330DefaultRow = createSelector(
  getKt1330State,
  (state: State) => state.defaultRow
);
