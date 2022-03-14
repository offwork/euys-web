import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1340_FEATURE_KEY, State } from './kt-1341.reducer';

// Lookup the 'Kt1341' feature state managed by NgRx
export const getKt1341State = createFeatureSelector<State>(KT_1340_FEATURE_KEY);

export const getKt1341Loaded = createSelector(
  getKt1341State,
  (state: State) => state.loaded
);

export const getKt1341LoadedUrunler = createSelector(
  getKt1341State,
  (state: State) => state.loadedUrunler
);

export const getKt1341LoadedCelikler = createSelector(
  getKt1341State,
  (state: State) => state.loadedCelikler
);

export const getKt1341Error = createSelector(
  getKt1341State,
  (state: State) => state.error
);

export const getKt1341Data = createSelector(
  getKt1341State,
  (state: State) => state.data
);

export const getKt1341AnatabloKomboList = createSelector(
  getKt1341State,
  (state: State) => state.anatabloKomboList
);

export const getKt1341Urunler = createSelector(
  getKt1341State,
  (state: State) => state.urunler
);

export const getKt1341Celikler = createSelector(
  getKt1341State,
  (state: State) => state.celikler
);

export const getKt1341DefaultRow = createSelector(
  getKt1341State,
  (state: State) => state.defaultRow
);
