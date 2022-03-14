import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1302_FEATURE_KEY, State } from './kt-1302.reducer';

// Lookup the 'Kt1302' feature state managed by NgRx
export const getKt1302State = createFeatureSelector<State>(KT_1302_FEATURE_KEY);

export const getKt1302Loaded = createSelector(
  getKt1302State,
  (state: State) => state.loaded
);

export const getKt1302LoadedUrunler = createSelector(
  getKt1302State,
  (state: State) => state.loadedUrunler
);

export const getKt1302LoadedCelikler = createSelector(
  getKt1302State,
  (state: State) => state.loadedCelikler
);

export const getKt1302Error = createSelector(
  getKt1302State,
  (state: State) => state.error
);

export const getKt1302Data = createSelector(
  getKt1302State,
  (state: State) => state.data
);

export const getKt1302AnatabloKomboList = createSelector(
  getKt1302State,
  (state: State) => state.anatabloKomboList
);

export const getKt1302Urunler = createSelector(
  getKt1302State,
  (state: State) => state.urunler
);

export const getKt1302Celikler = createSelector(
  getKt1302State,
  (state: State) => state.celikler
);

export const getKt1302DefaultRow = createSelector(
  getKt1302State,
  (state: State) => state.defaultRow
);
