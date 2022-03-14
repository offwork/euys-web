import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1312_FEATURE_KEY, State } from './kt-1312.reducer';

// Lookup the 'Kt1312' feature state managed by NgRx
export const getKt1312State = createFeatureSelector<State>(KT_1312_FEATURE_KEY);

export const getKt1312Loaded = createSelector(
  getKt1312State,
  (state: State) => state.loaded
);

export const getKt1312LoadedUrunler = createSelector(
  getKt1312State,
  (state: State) => state.loadedUrunler
);

export const getKt1312LoadedCelikler = createSelector(
  getKt1312State,
  (state: State) => state.loadedCelikler
);

export const getKt1312Error = createSelector(
  getKt1312State,
  (state: State) => state.error
);

export const getKt1312Data = createSelector(
  getKt1312State,
  (state: State) => state.data
);

export const getKt1312AnatabloKomboList = createSelector(
  getKt1312State,
  (state: State) => state.anatabloKomboList
);

export const getKt1312Urunler = createSelector(
  getKt1312State,
  (state: State) => state.urunler
);

export const getKt1312Celikler = createSelector(
  getKt1312State,
  (state: State) => state.celikler
);

export const getKt1312DefaultRow = createSelector(
  getKt1312State,
  (state: State) => state.defaultRow
);
