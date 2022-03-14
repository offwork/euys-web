import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UT_5105_FEATURE_KEY, State } from './ut-5105.reducer';

// Lookup the 'Ut5105' feature state managed by NgRx
export const getUt5105State = createFeatureSelector<State>(UT_5105_FEATURE_KEY);

export const getUt5105Loaded = createSelector(
  getUt5105State,
  (state: State) => state.loaded
);

export const getUt5105Error = createSelector(
  getUt5105State,
  (state: State) => state.error
);
export const getUt5105Data = createSelector(
  getUt5105State,
  (state: State) => state.data
);
export const getUt5105DataLog = createSelector(
  getUt5105State,
  (state: State) => state.dataLog
);
export const getUt5105HatKodList = createSelector(
  getUt5105State,
  (state: State) => state.hatKoduList
);
export const getUt5105TankNoList = createSelector(
  getUt5105State,
  (state: State) => state.tankNoList
);
export const getUt5105VardiyaUretimleri = createSelector(
  getUt5105State,
  (state: State) => state.vardiyaUretimleri
);
export const getUt5105Code = createSelector(
  getUt5105State,
  (state: State) => state.utTankDurulamaCode
);
export const getUt5105TankDurulamaLimitler = createSelector(
  getUt5105State,
  (state: State) => state.utTankDurulamaLimitList
);
