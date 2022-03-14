import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1326_FEATURE_KEY, State } from './kt-1326.reducer';

// Lookup the 'Kt1326' feature state managed by NgRx
export const getKt1326State = createFeatureSelector<State>(KT_1326_FEATURE_KEY);

export const getKt1326Loaded = createSelector(
  getKt1326State,
  (state: State) => state.loaded
);

export const getKt1326LoadedUrunler = createSelector(
  getKt1326State,
  (state: State) => state.loadedUrunler
);

export const getKt1326LoadedCelikler = createSelector(
  getKt1326State,
  (state: State) => state.loadedCelikler
);

export const getKt1326Error = createSelector(
  getKt1326State,
  (state: State) => state.error
);

export const getKt1326Data = createSelector(
  getKt1326State,
  (state: State) => state.data
);

export const getKt1326AnatabloKomboList = createSelector(
  getKt1326State,
  (state: State) => state.anatabloKomboList
);

export const getKt1326Urunler = createSelector(
  getKt1326State,
  (state: State) => state.urunler
);

export const getKt1326Celikler = createSelector(
  getKt1326State,
  (state: State) => state.celikler
);

export const getKt1326DefaultRow = createSelector(
  getKt1326State,
  (state: State) => state.defaultRow
);
