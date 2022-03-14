import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  KSYF_STANDART_HAT_HIZI_FEATURE_KEY,
  State,
} from './ksyf-standart-hat-hizi.reducer';

// Lookup the 'KsyfStandartHatHizi' feature state managed by NgRx
export const getKsyfStandartHatHiziState = createFeatureSelector<State>(
  KSYF_STANDART_HAT_HIZI_FEATURE_KEY
);

export const getKsyfStandartHatHiziLoaded = createSelector(
  getKsyfStandartHatHiziState,
  (state: State) => state.loaded
);

export const getKsyfStandartHatHiziError = createSelector(
  getKsyfStandartHatHiziState,
  (state: State) => state.error
);

export const getStandartHiz = createSelector(
  getKsyfStandartHatHiziState,
  (state: State) => state.standartHiz
);

export const getStandartHizGrid = createSelector(
  getKsyfStandartHatHiziState,
  (state: State) => state.dataGrid
);

export const getInvalidGrid = createSelector(
  getKsyfStandartHatHiziState,
  (state: State) => state.isInvalid
);

export const getLines = createSelector(
  getKsyfStandartHatHiziState,
  (state: State) => state.hatlar
);
