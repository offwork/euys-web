import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1315_FEATURE_KEY, State } from './kt-1315.reducer';

// Lookup the 'Kt1315' feature state managed by NgRx
export const getKt1315State = createFeatureSelector<State>(KT_1315_FEATURE_KEY);

export const getKt1315Loaded = createSelector(
  getKt1315State,
  (state: State) => state.loaded
);

export const getKt1315LoadedUrunler = createSelector(
  getKt1315State,
  (state: State) => state.loadedUrunler
);

export const getKt1315LoadedCelikler = createSelector(
  getKt1315State,
  (state: State) => state.loadedCelikler
);

export const getKt1315Error = createSelector(
  getKt1315State,
  (state: State) => state.error
);

export const getKt1315Data = createSelector(
  getKt1315State,
  (state: State) => state.data
);

export const getKt1315AnatabloKomboList = createSelector(
  getKt1315State,
  (state: State) => state.anatabloKomboList
);

export const getKt1315Urunler = createSelector(
  getKt1315State,
  (state: State) => state.urunler
);

export const getKt1315Celikler = createSelector(
  getKt1315State,
  (state: State) => state.celikler
);

export const getKt1315DefaultRow = createSelector(
  getKt1315State,
  (state: State) => state.defaultRow
);
