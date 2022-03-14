import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1332_FEATURE_KEY, State } from './kt-1332.reducer';

// Lookup the 'Kt1332' feature state managed by NgRx
export const getKt1332State = createFeatureSelector<State>(KT_1332_FEATURE_KEY);

export const getKt1332Loaded = createSelector(
  getKt1332State,
  (state: State) => state.loaded
);

export const getKt1332LoadedUrunler = createSelector(
  getKt1332State,
  (state: State) => state.loadedUrunler
);

export const getKt1332LoadedCelikler = createSelector(
  getKt1332State,
  (state: State) => state.loadedCelikler
);

export const getKt1332Error = createSelector(
  getKt1332State,
  (state: State) => state.error
);

export const getKt1332Data = createSelector(
  getKt1332State,
  (state: State) => state.data
);

export const getKt1332AnatabloKomboList = createSelector(
  getKt1332State,
  (state: State) => state.anatabloKomboList
);

export const getKt1332Urunler = createSelector(
  getKt1332State,
  (state: State) => state.urunler
);

export const getKt1332Celikler = createSelector(
  getKt1332State,
  (state: State) => state.celikler
);

export const getKt1332DefaultRow = createSelector(
  getKt1332State,
  (state: State) => state.defaultRow
);
