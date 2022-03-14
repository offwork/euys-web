import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1360_FEATURE_KEY, State } from './kt-1360.reducer';

// Lookup the 'Kt1360' feature state managed by NgRx
export const getKt1360State = createFeatureSelector<State>(KT_1360_FEATURE_KEY);

export const getKt1360Loaded = createSelector(
  getKt1360State,
  (state: State) => state.loaded
);
export const getKt1360LoadedUrunler = createSelector(
  getKt1360State,
  (state: State) => state.loadedUrunler
);

export const getKt1360LoadedCelikler = createSelector(
  getKt1360State,
  (state: State) => state.loadedCelikler
);
export const getKt1360Data = createSelector(
  getKt1360State,
  (state: State) => state.data
);

export const getKt1360AnatabloKomboList = createSelector(
  getKt1360State,
  (state: State) => state.anatabloKomboList
);

export const getKt1360Urunler = createSelector(
  getKt1360State,
  (state: State) => state.urunler
);

export const getKt1360Celikler = createSelector(
  getKt1360State,
  (state: State) => state.celikler
);

export const getKt1360DefaultRow = createSelector(
  getKt1360State,
  (state: State) => state.defaultRow
);
