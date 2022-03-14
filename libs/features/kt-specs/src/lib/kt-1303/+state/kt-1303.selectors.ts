import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1303_FEATURE_KEY, State } from './kt-1303.reducer';

// Lookup the 'Kt1303' feature state managed by NgRx
export const getKt1303State = createFeatureSelector<State>(KT_1303_FEATURE_KEY);

export const getKt1303Loaded = createSelector(
  getKt1303State,
  (state: State) => state.loaded
);

export const getKt1303LoadedUrunler = createSelector(
  getKt1303State,
  (state: State) => state.loadedUrunler
);

export const getKt1303LoadedCelikler = createSelector(
  getKt1303State,
  (state: State) => state.loadedCelikler
);

export const getKt1303Error = createSelector(
  getKt1303State,
  (state: State) => state.error
);

export const getKt1303Data = createSelector(
  getKt1303State,
  (state: State) => state.data
);

export const getKt1303AnatabloKomboList = createSelector(
  getKt1303State,
  (state: State) => state.anatabloKomboList
);

export const getKt1303Urunler = createSelector(
  getKt1303State,
  (state: State) => state.urunler
);

export const getKt1303Celikler = createSelector(
  getKt1303State,
  (state: State) => state.celikler
);

export const getKt1303DefaultRow = createSelector(
  getKt1303State,
  (state: State) => state.defaultRow
);
