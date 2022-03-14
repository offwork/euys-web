import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1318_FEATURE_KEY, State } from './kt-1318.reducer';

// Lookup the 'Kt1318' feature state managed by NgRx
export const getKt1318State = createFeatureSelector<State>(KT_1318_FEATURE_KEY);

export const getKt1318Loaded = createSelector(
  getKt1318State,
  (state: State) => state.loaded
);

export const getKt1318LoadedUrunler = createSelector(
  getKt1318State,
  (state: State) => state.loadedUrunler
);

export const getKt1318LoadedCelikler = createSelector(
  getKt1318State,
  (state: State) => state.loadedCelikler
);

export const getKt1318Error = createSelector(
  getKt1318State,
  (state: State) => state.error
);

export const getKt1318Data = createSelector(
  getKt1318State,
  (state: State) => state.data
);

export const getKt1318AnatabloKomboList = createSelector(
  getKt1318State,
  (state: State) => state.anatabloKomboList
);

export const getKt1318Urunler = createSelector(
  getKt1318State,
  (state: State) => state.urunler
);

export const getKt1318Celikler = createSelector(
  getKt1318State,
  (state: State) => state.celikler
);

export const getKt1318DefaultRow = createSelector(
  getKt1318State,
  (state: State) => state.defaultRow
);
