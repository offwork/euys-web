import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UT_5101_FEATURE_KEY, State } from './ut-5101.reducer';

// Lookup the 'Ut5101' feature state managed by NgRx
export const getUt5101State = createFeatureSelector<State>(UT_5101_FEATURE_KEY);

export const getUt5101Loaded = createSelector(
  getUt5101State,
  (state: State) => state.loaded
);

export const getUt5101Error = createSelector(
  getUt5101State,
  (state: State) => state.error
);

export const getUt5101Data = createSelector(
  getUt5101State,
  (state: State) => state.data
);

export const getUt5101DataLog = createSelector(
  getUt5101State,
  (state: State) => state.dataLog
);

export const getUt5101VardiyaUretimleri = createSelector(
  getUt5101State,
  (state: State) => state.vardiyaUretimleri
);

export const getUt5101Toplam = createSelector(
  getUt5101State,
  (state: State) => state.lapaToplam
);

export const getUt5101Code = createSelector(
  getUt5101State,
  (state: State) => state.utCinkoLapaCode
);

export const getUt5101DefaultRow = createSelector(
  getUt5101State,
  (state: State) => state.defaultRow
);
