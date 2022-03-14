import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UT_6002_FEATURE_KEY, State } from './ut-6002.reducer';

// Lookup the 'Ut6002' feature state managed by NgRx
export const getUt6002State = createFeatureSelector<State>(UT_6002_FEATURE_KEY);

export const getUt6002Loaded = createSelector(
  getUt6002State,
  (state: State) => state.loaded
);

export const getUt6002Error = createSelector(
  getUt6002State,
  (state: State) => state.error
);

export const getUt6002KusurluIstifListesi = createSelector(
  getUt6002State,
  (state: State) => state.data
);

export const getUt6002KusurIstifKaliteListesi= createSelector(
  getUt6002State,
  (state: State) => state.kusurIstifKaliteListesi
);

export const getUt6002HatTanimListesi = createSelector(
  getUt6002State,
  (state: State) => state.hatTanimListesi
);