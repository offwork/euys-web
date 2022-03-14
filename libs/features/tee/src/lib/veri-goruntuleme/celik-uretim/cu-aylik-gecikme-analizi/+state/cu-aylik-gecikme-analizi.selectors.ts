import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY, State } from './cu-aylik-gecikme-analizi.reducer';

// Lookup the 'AylikGecikmeAnalizi' feature state managed by NgRx
export const getCuAylikGecikmeAnaliziState = createFeatureSelector<State>(CU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY);

export const getCuAylikGecikmeAnaliziLoaded = createSelector(
  getCuAylikGecikmeAnaliziState,
  (state: State) => state.loaded
);

export const getCuAylikGecikmeAnaliziError = createSelector(
  getCuAylikGecikmeAnaliziState,
  (state: State) => state.error
);

export const getAllCuAylikGecikmeAnalizi = createSelector(
  getCuAylikGecikmeAnaliziState,
  (state: State) => state.gecikmeAnalizi
);
