import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KK_8102_FEATURE_KEY, State } from './kk-8102.reducer';

// Lookup the 'Kk8102' feature state managed by NgRx
export const getKk8102State = createFeatureSelector<State>(KK_8102_FEATURE_KEY);

export const getKk8102KusurGoruntulemeList = createSelector(
  getKk8102State,
  (state: State) => state.kusurGoruntulemeList
);
export const hoverKusurTanimBaslik = createSelector(
  getKk8102State,
  (state: State) => state.hoverKusurTanimBaslik
);

export const getKk8102UtHatList = createSelector(
  getKk8102State,
  (state: State) => state.utHatList
);

export const getKk8102UtHatListLoaded = createSelector(
  getKk8102State,
  (state: State) => state.utHatListLoaded
);

export const getKk8102KusurListLoaded = createSelector(
  getKk8102State,
  (state: State) => state.kusurListLoaded
);

export const isLoading = createSelector(
  getKk8102State,
  (state: State) => !state.kusurListLoaded && !state.utHatListLoaded
);

export const tabloBaslik = createSelector(
  getKk8102State,
  (state: State) => state.tabloBaslik
);

export const kusurSinifiFilter = createSelector(
  getKk8102State,
  (state: State) => state.kusurSinifiFilter
);

export const anaKusurKoduFilter = createSelector(
  getKk8102State,
  (state: State) => state.anaKusurKoduFilter
);

export const anaKusurKoduAciklamaFilter = createSelector(
  getKk8102State,
  (state: State) => state.anaKusurKoduAciklamaFilter
);

export const kusurKoduFilter = createSelector(
  getKk8102State,
  (state: State) => state.kusurKoduFilter
);

export const kusurKoduAciklamaFilter = createSelector(
  getKk8102State,
  (state: State) => state.kusurKoduAciklamaFilter
);

export const statuFilter = createSelector(
  getKk8102State,
  (state: State) => state.statuFilter
);

export const hurdaFilter = createSelector(
  getKk8102State,
  (state: State) => state.hurdaFilter
);

export const isFilterMod = createSelector(
  getKk8102State,
  (state: State) => state.isFilterMod
);

/*
export const getKk8102KusurKtlgViewListLoaded = createSelector(
  getKk8102State,
  (state: State) => state.kusurKtlgViewListLoaded
);

export const getKk8102KusurList = createSelector(
  getKk8102State,
  (state: State) => state.kusurList
);



export const getKk8102KusurKtlgViewList = createSelector(
  getKk8102State,
  (state: State) => state.kusurKtlgViewList
);

export const getKk8102SelectedKusur = createSelector(
  getKk8102State,
  (state: State) => state.selectedKusur
);*/
