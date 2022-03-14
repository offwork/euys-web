import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1321_FEATURE_KEY, State } from './kt-1321.reducer';

// Lookup the 'Kt1321' feature state managed by NgRx
export const getKt1321State = createFeatureSelector<State>(KT_1321_FEATURE_KEY);

export const getKt1321Loaded = createSelector(
  getKt1321State,
  (state: State) => state.loaded
);

export const getKt1321LoadedUrunler = createSelector(
  getKt1321State,
  (state: State) => state.loadedUrunler
);

export const getKt1321LoadedCelikler = createSelector(
  getKt1321State,
  (state: State) => state.loadedCelikler
);

export const getKt1321Error = createSelector(
  getKt1321State,
  (state: State) => state.error
);

export const getKt1321Data = createSelector(
  getKt1321State,
  (state: State) => state.data
);

export const getKt1321AnatabloKomboList = createSelector(
  getKt1321State,
  (state: State) => state.anatabloKomboList
);

export const getKt1321Urunler = createSelector(
  getKt1321State,
  (state: State) => state.urunler
);

export const getKt1321Celikler = createSelector(
  getKt1321State,
  (state: State) => state.celikler
);

export const getKt1321DefaultRow = createSelector(
  getKt1321State,
  (state: State) => state.defaultRow
);
