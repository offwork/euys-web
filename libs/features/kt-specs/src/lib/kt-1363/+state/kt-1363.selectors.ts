import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1363_FEATURE_KEY, State } from './kt-1363.reducer';

// Lookup the 'Kt1363' feature state managed by NgRx
export const getKt1363State = createFeatureSelector<State>(KT_1363_FEATURE_KEY);

export const getKt1363Loaded = createSelector(
  getKt1363State,
  (state: State) => state.loaded
);
export const getKt1363LoadedUrunler = createSelector(
  getKt1363State,
  (state: State) => state.loadedUrunler
);

export const getKt1363LoadedCelikler = createSelector(
  getKt1363State,
  (state: State) => state.loadedCelikler
);
export const getKt1363Data = createSelector(
  getKt1363State,
  (state: State) => state.data
);

export const getKt1363AnatabloKomboList = createSelector(
  getKt1363State,
  (state: State) => state.anatabloKomboList
);

export const getKt1363Urunler = createSelector(
  getKt1363State,
  (state: State) => state.urunler
);

export const getKt1363Celikler = createSelector(
  getKt1363State,
  (state: State) => state.celikler
);

export const getKt1363DefaultRow = createSelector(
  getKt1363State,
  (state: State) => state.defaultRow
);
