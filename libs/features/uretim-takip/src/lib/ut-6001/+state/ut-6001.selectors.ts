import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UT_6001_FEATURE_KEY, State } from './ut-6001.reducer';

// Lookup the 'Ut6001' feature state managed by NgRx
export const getUt6001State = createFeatureSelector<State>(UT_6001_FEATURE_KEY);

export const getUt6001Loaded = createSelector(
  getUt6001State,
  (state: State) => state.loaded
);

export const getUt6001Error = createSelector(
  getUt6001State,
  (state: State) => state.error
);

export const getUt6001KusurluIstifListesi = createSelector(
  getUt6001State,
  (state: State) => state.data
);

export const getUt6001KusurIstifKaliteListesi = createSelector(
  getUt6001State,
  (state: State) => state.kusurIstifKaliteListesi
);

export const getUt6001HatTanimListesi = createSelector(
  getUt6001State,
  (state: State) => state.hatTanimListesi
);
