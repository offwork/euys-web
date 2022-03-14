import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1364_FEATURE_KEY, State } from './kt-1364.reducer';

// Lookup the 'Kt1364' feature state managed by NgRx
export const getKt1364State = createFeatureSelector<State>(KT_1364_FEATURE_KEY);

export const getKt1364Loaded = createSelector(
  getKt1364State,
  (state: State) => state.loaded
);
export const getKt1364LoadedUrunler = createSelector(
  getKt1364State,
  (state: State) => state.loadedUrunler
);

export const getKt1364LoadedCelikler = createSelector(
  getKt1364State,
  (state: State) => state.loadedCelikler
);
export const getKt1364Data = createSelector(
  getKt1364State,
  (state: State) => state.data
);

export const getKt1364AnatabloKomboList = createSelector(
  getKt1364State,
  (state: State) => state.anatabloKomboList
);

export const getKt1364Urunler = createSelector(
  getKt1364State,
  (state: State) => state.urunler
);

export const getKt1364Celikler = createSelector(
  getKt1364State,
  (state: State) => state.celikler
);

export const getKt1364DefaultRow = createSelector(
  getKt1364State,
  (state: State) => state.defaultRow
);
