import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UP_3002_FEATURE_KEY, State } from './up-3002.reducer';

// Lookup the 'Up3002' feature state managed by NgRx
export const getUp3002State = createFeatureSelector<State>(UP_3002_FEATURE_KEY);

export const getPlanliDuruslar = createSelector(
  getUp3002State,
  (state: State) => state.planliDuruslar
);

export const getPlanliDuruslarLoading = createSelector(
  getUp3002State,
  (state: State) => state.planliDuruslarLoading
);

export const getPlanliDuruslarTesisAdlari = createSelector(
  getUp3002State,
  (state: State) => state.planliDuruslarTesisAdlari
);

export const getUretimHedefleri = createSelector(
  getUp3002State,
  (state: State) => state.uretimHedefleri
);

export const getUretimHedefleriLoading = createSelector(
  getUp3002State,
  (state: State) => state.uretimHedefleriLoading
);

export const getUretimHedefleriTesisAdlari = createSelector(
  getUp3002State,
  (state: State) => state.uretimHedefleriTesisAdlari
);
