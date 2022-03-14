import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CU_TARIH_GECIKME_ANALIZI_FEATURE_KEY, State } from './cu-tarih-gecikme-analizi.reducer';

// Lookup the 'TarihGecikmeAnalizi' feature state managed by NgRx
export const getCuTarihGecikmeAnaliziState = createFeatureSelector<State>(CU_TARIH_GECIKME_ANALIZI_FEATURE_KEY);

export const getCuTarihGecikmeAnaliziLoaded = createSelector(
  getCuTarihGecikmeAnaliziState,
  (state: State) => state.loaded
);

export const getCuTarihGecikmeAnaliziError = createSelector(
  getCuTarihGecikmeAnaliziState,
  (state: State) => state.error
);

export const getAllCuTarihGecikmeAnalizi = createSelector(
  getCuTarihGecikmeAnaliziState,
  (state: State) => state.tesisGecikmeleri
);
