import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1301_FEATURE_KEY, State } from './kt-1301.reducer';

// Lookup the 'Kt1301' feature state managed by NgRx
export const getKt1301State = createFeatureSelector<State>(KT_1301_FEATURE_KEY);

export const getKt1301Loaded = createSelector(
  getKt1301State,
  (state: State) => state.loaded
);
export const getKt1301LoadedUrunler = createSelector(
  getKt1301State,
  (state: State) => state.loadedUrunler
);

export const getKt1301LoadedCelikler = createSelector(
  getKt1301State,
  (state: State) => state.loadedCelikler
);

export const getKt1301Error = createSelector(
  getKt1301State,
  (state: State) => state.error
);

export const getKt1301Data = createSelector(
  getKt1301State,
  (state: State) => state.data
);

export const getKt1301AnatabloKomboList = createSelector(
  getKt1301State,
  (state: State) => state.anatabloKomboList
);

export const getKt1301Urunler = createSelector(
  getKt1301State,
  (state: State) => state.urunler
);

export const getKt1301Celikler = createSelector(
  getKt1301State,
  (state: State) => state.celikler
);

export const getKt1301DefaultRow = createSelector(
  getKt1301State,
  (state: State) => state.defaultRow
);
