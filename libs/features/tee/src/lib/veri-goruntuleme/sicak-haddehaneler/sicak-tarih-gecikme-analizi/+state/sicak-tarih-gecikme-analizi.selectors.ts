import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SICAK_TARIH_GECIKME_ANALIZI_FEATURE_KEY, State } from './sicak-tarih-gecikme-analizi.reducer';

// Lookup the 'TarihGecikmeAnalizi' feature state managed by NgRx
export const getSicakTarihGecikmeAnaliziState = createFeatureSelector<State>(SICAK_TARIH_GECIKME_ANALIZI_FEATURE_KEY);

export const getSicakTarihGecikmeAnaliziLoaded = createSelector(
  getSicakTarihGecikmeAnaliziState,
  (state: State) => state.loaded
);

export const getSicakTarihGecikmeAnaliziError = createSelector(
  getSicakTarihGecikmeAnaliziState,
  (state: State) => state.error
);

export const getAllSicakTarihGecikmeAnalizi = createSelector(
  getSicakTarihGecikmeAnaliziState,
  (state: State) => state.tesisGecikmeleri
);
