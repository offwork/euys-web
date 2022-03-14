import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1306_FEATURE_KEY, State } from './kt-1306.reducer';

// Lookup the 'Kt1306' feature state managed by NgRx
export const getKt1306State = createFeatureSelector<State>(KT_1306_FEATURE_KEY);

export const getKt1306Loaded = createSelector(
  getKt1306State,
  (state: State) => state.loaded
);

export const getKt1306LoadedUrunler = createSelector(
  getKt1306State,
  (state: State) => state.loadedUrunler
);

export const getKt1306LoadedCelikler = createSelector(
  getKt1306State,
  (state: State) => state.loadedCelikler
);

export const getKt1306Error = createSelector(
  getKt1306State,
  (state: State) => state.error
);

export const getKt1306Data = createSelector(
  getKt1306State,
  (state: State) => state.data
);

export const getKt1306AnatabloKomboList = createSelector(
  getKt1306State,
  (state: State) => state.anatabloKomboList
);

export const getKt1306Urunler = createSelector(
  getKt1306State,
  (state: State) => state.urunler
);

export const getKt1306Celikler = createSelector(
  getKt1306State,
  (state: State) => state.celikler
);

export const getKt1306DefaultRow = createSelector(
  getKt1306State,
  (state: State) => state.defaultRow
);
