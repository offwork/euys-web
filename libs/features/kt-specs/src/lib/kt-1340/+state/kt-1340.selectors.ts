import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1340_FEATURE_KEY, State } from './kt-1340.reducer';

// Lookup the 'Kt1340' feature state managed by NgRx
export const getKt1340State = createFeatureSelector<State>(KT_1340_FEATURE_KEY);

export const getKt1340Loaded = createSelector(
  getKt1340State,
  (state: State) => state.loaded
);

export const getKt1340LoadedUrunler = createSelector(
  getKt1340State,
  (state: State) => state.loadedUrunler
);

export const getKt1340LoadedCelikler = createSelector(
  getKt1340State,
  (state: State) => state.loadedCelikler
);

export const getKt1340Error = createSelector(
  getKt1340State,
  (state: State) => state.error
);

export const getKt1340Data = createSelector(
  getKt1340State,
  (state: State) => state.data
);

export const getKt1340AnatabloKomboList = createSelector(
  getKt1340State,
  (state: State) => state.anatabloKomboList
);

export const getKt1340Urunler = createSelector(
  getKt1340State,
  (state: State) => state.urunler
);

export const getKt1340Celikler = createSelector(
  getKt1340State,
  (state: State) => state.celikler
);

export const getKt1340DefaultRow = createSelector(
  getKt1340State,
  (state: State) => state.defaultRow
);
