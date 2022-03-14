import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DU_TARIH_GECIKME_ANALIZI_FEATURE_KEY, State } from './du-tarih-gecikme-analizi.reducer';

// Lookup the 'TarihGecikmeAnalizi' feature state managed by NgRx
export const getDuTarihGecikmeAnaliziState = createFeatureSelector<State>(DU_TARIH_GECIKME_ANALIZI_FEATURE_KEY);

export const getDuTarihGecikmeAnaliziLoaded = createSelector(
  getDuTarihGecikmeAnaliziState,
  (state: State) => state.loaded
);

export const getDuTarihGecikmeAnaliziError = createSelector(
  getDuTarihGecikmeAnaliziState,
  (state: State) => state.error
);

export const getAllDuTarihGecikmeAnalizi = createSelector(
  getDuTarihGecikmeAnaliziState,
  (state: State) => state.tesisGecikmeleri
);
