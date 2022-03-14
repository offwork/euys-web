import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1359_FEATURE_KEY, State } from './kt-1359.reducer';

// Lookup the 'Kt1359' feature state managed by NgRx
export const getKt1359State = createFeatureSelector<State>(KT_1359_FEATURE_KEY);

export const getKt1359YaglamaList = createSelector(
  getKt1359State,
  (state: State) => state.ktSpYaglamaList
);

export const getKt1359YaglamaListLoaded = createSelector(
  getKt1359State,
  (state: State) => state.ktSpYaglamaListLoaded
);

export const getKt1359Config = createSelector(
  getKt1359State,
  (state: State) => state.config
);

export const getKt1359ConfigLoaded = createSelector(
  getKt1359State,
  (state: State) => state.configLoaded
);

export const getKt1359Error = createSelector(
  getKt1359State,
  (state: State) => state.error
);

export const getKt1359Data = createSelector(
  getKt1359State,
  (state: State) => state.data
);

export const getKt1359Kaliteler = createSelector(
  getKt1359State,
  (state: State) => state.config.ktOICelikKalitesiList
);

export const getKt1359Hatlar = createSelector(
  getKt1359State,
  (state: State) => state.config.utStHatTanimList
);

export const getKt1359YaglamaMarkalari = createSelector(
  getKt1359State,
  (state: State) => state.config.yaglamaMarkasiList
);

export const getKt1359YaglamaDurumu = createSelector(
  getKt1359State,
  (state: State) => state.config.ktAnatabloYaglamaDurumuList
);

export const getKt1359YaglamaYuzeyi = createSelector(
  getKt1359State,
  (state: State) => state.config.ktStYaglamaYuzeyiList
);

export const getKt1359YaglamaSpekAnaTablo = createSelector(
  getKt1359State,
  (state: State) => state.config.ktSpYaglamaSpecList
);

export const getKt1359UrunList = createSelector(
  getKt1359State,
  (state: State) => state.config?.ktOIUrunList
);

export const getKt1359DefaultRow = createSelector(
  getKt1359State,
  (state: State) => state.defaultRow
);
