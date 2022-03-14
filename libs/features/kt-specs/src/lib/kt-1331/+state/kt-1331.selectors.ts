import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1331_FEATURE_KEY, State } from './kt-1331.reducer';

// Lookup the 'Kt1331' feature state managed by NgRx
export const getKt1331State = createFeatureSelector<State>(KT_1331_FEATURE_KEY);

export const getKt1331Loaded = createSelector(
  getKt1331State,
  (state: State) => state.loaded
);

export const getKt1331LoadedUrunler = createSelector(
  getKt1331State,
  (state: State) => state.loadedUrunler
);

export const getKt1331LoadedCelikler = createSelector(
  getKt1331State,
  (state: State) => state.loadedCelikler
);

export const getKt1331Error = createSelector(
  getKt1331State,
  (state: State) => state.error
);

export const getKt1331Data = createSelector(
  getKt1331State,
  (state: State) => state.data
);

export const getKt1331AnatabloKomboList = createSelector(
  getKt1331State,
  (state: State) => state.anatabloKomboList
);

export const getKt1331Urunler = createSelector(
  getKt1331State,
  (state: State) => state.urunler
);

export const getKt1331Celikler = createSelector(
  getKt1331State,
  (state: State) => state.celikler
);

export const getKt1331DefaultRow = createSelector(
  getKt1331State,
  (state: State) => state.defaultRow
);
