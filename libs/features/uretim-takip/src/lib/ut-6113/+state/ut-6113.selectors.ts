import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, UT_6113_FEATURE_KEY } from './ut-6113.reducer';

// Lookup the 'Ut6113' feature state managed by NgRx
export const getUt6113State = createFeatureSelector<State>(UT_6113_FEATURE_KEY);

export const getUt6113Loaded = createSelector(
  getUt6113State,
  (state: State) => state.loaded
);

export const getUt6113Error = createSelector(
  getUt6113State,
  (state: State) => state.error
);

export const getUt6113Data = createSelector(
  getUt6113State,
  (state: State) => state.data
);

export const getUt6113SaveResponse = createSelector(
  getUt6113State,
  (state: State) => state.saveResponse
);

export const getUt6113DeleteResponse = createSelector(
  getUt6113State,
  (state: State) => state.deleteResponse
);

export const getUt6113Listeler = createSelector(
  getUt6113State,
  (state: State) => state.listeler
);

export const getUt6113AltKodListesi = createSelector(
  getUt6113State,
  (state: State) => state.altKodListesi
);
