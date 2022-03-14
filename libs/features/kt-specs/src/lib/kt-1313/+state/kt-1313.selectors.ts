import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1313_FEATURE_KEY, State } from './kt-1313.reducer';

// Lookup the 'Kt1313' feature state managed by NgRx
export const getKt1313State = createFeatureSelector<State>(KT_1313_FEATURE_KEY);

export const getKt1313Loaded = createSelector(
  getKt1313State,
  (state: State) => state.loaded
);

export const getKt1313LoadedUrunler = createSelector(
  getKt1313State,
  (state: State) => state.loadedUrunler
);

export const getKt1313LoadedCelikler = createSelector(
  getKt1313State,
  (state: State) => state.loadedCelikler
);

export const getKt1313Error = createSelector(
  getKt1313State,
  (state: State) => state.error
);

export const getKt1313Data = createSelector(
  getKt1313State,
  (state: State) => state.data
);

export const getKt1313AnatabloKomboList = createSelector(
  getKt1313State,
  (state: State) => state.anatabloKomboList
);

export const getKt1313Urunler = createSelector(
  getKt1313State,
  (state: State) => state.urunler
);

export const getKt1313Celikler = createSelector(
  getKt1313State,
  (state: State) => state.celikler
);

export const getKt1313DefaultRow = createSelector(
  getKt1313State,
  (state: State) => state.defaultRow
);
