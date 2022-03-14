import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1339_FEATURE_KEY, State } from './kt-1339.reducer';

// Lookup the 'Kt1339' feature state managed by NgRx
export const getKt1339State = createFeatureSelector<State>(KT_1339_FEATURE_KEY);

export const getKt1339Loaded = createSelector(
  getKt1339State,
  (state: State) => state.loaded
);

export const getKt1339LoadedUrunler = createSelector(
  getKt1339State,
  (state: State) => state.loadedUrunler
);

export const getKt1339LoadedCelikler = createSelector(
  getKt1339State,
  (state: State) => state.loadedCelikler
);

export const getKt1339Error = createSelector(
  getKt1339State,
  (state: State) => state.error
);

export const getKt1339Data = createSelector(
  getKt1339State,
  (state: State) => state.data
);

export const getKt1339AnatabloKomboList = createSelector(
  getKt1339State,
  (state: State) => state.anatabloKomboList
);

export const getKt1339Urunler = createSelector(
  getKt1339State,
  (state: State) => state.urunler
);

export const getKt1339Celikler = createSelector(
  getKt1339State,
  (state: State) => state.celikler
);

export const getKt1339DefaultRow = createSelector(
  getKt1339State,
  (state: State) => state.defaultRow
);
