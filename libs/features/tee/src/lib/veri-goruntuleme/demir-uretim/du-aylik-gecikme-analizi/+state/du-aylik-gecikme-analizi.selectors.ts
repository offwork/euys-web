import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY, State } from './du-aylik-gecikme-analizi.reducer';

// Lookup the 'AylikGecikmeAnalizi' feature state managed by NgRx
export const getDuAylikGecikmeAnaliziState = createFeatureSelector<State>(DU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY);

export const getDuAylikGecikmeAnaliziLoaded = createSelector(
  getDuAylikGecikmeAnaliziState,
  (state: State) => state.loaded
);

export const getDuAylikGecikmeAnaliziError = createSelector(
  getDuAylikGecikmeAnaliziState,
  (state: State) => state.error
);

export const getAllDuAylikGecikmeAnalizi = createSelector(
  getDuAylikGecikmeAnaliziState,
  (state: State) => state.gecikmeAnalizi
);
