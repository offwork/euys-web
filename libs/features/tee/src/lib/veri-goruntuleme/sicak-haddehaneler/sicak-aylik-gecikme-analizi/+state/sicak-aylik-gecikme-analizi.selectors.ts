import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SICAK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY, State } from './sicak-aylik-gecikme-analizi.reducer';

// Lookup the 'AylikGecikmeAnalizi' feature state managed by NgRx
export const getSicakAylikGecikmeAnaliziState = createFeatureSelector<State>(SICAK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY);

export const getSicakAylikGecikmeAnaliziLoaded = createSelector(
  getSicakAylikGecikmeAnaliziState,
  (state: State) => state.loaded
);

export const getSicakAylikGecikmeAnaliziError = createSelector(
  getSicakAylikGecikmeAnaliziState,
  (state: State) => state.error
);

export const getAllSicakAylikGecikmeAnalizi = createSelector(
  getSicakAylikGecikmeAnaliziState,
  (state: State) => state.gecikmeAnalizi
);
