import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1314_FEATURE_KEY, State } from './kt-1314.reducer';

// Lookup the 'Kt1314' feature state managed by NgRx
export const getKt1314State = createFeatureSelector<State>(KT_1314_FEATURE_KEY);

export const getKt1314Loaded = createSelector(
  getKt1314State,
  (state: State) => state.loaded
);

export const getKt1314LoadedUrunler = createSelector(
  getKt1314State,
  (state: State) => state.loadedUrunler
);

export const getKt1314LoadedCelikler = createSelector(
  getKt1314State,
  (state: State) => state.loadedCelikler
);

export const getKt1314Error = createSelector(
  getKt1314State,
  (state: State) => state.error
);

export const getKt1314Data = createSelector(
  getKt1314State,
  (state: State) => state.data
);

export const getKt1314AnatabloKomboList = createSelector(
  getKt1314State,
  (state: State) => state.anatabloKomboList
);

export const getKt1314Urunler = createSelector(
  getKt1314State,
  (state: State) => state.urunler
);

export const getKt1314Celikler = createSelector(
  getKt1314State,
  (state: State) => state.celikler
);

export const getKt1314DefaultRow = createSelector(
  getKt1314State,
  (state: State) => state.defaultRow
);
