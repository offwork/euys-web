import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UT_5103_FEATURE_KEY, State } from './ut-5103.reducer';

// Lookup the 'Ut5103' feature state managed by NgRx
export const getUt5103State = createFeatureSelector<State>(UT_5103_FEATURE_KEY);

export const getUt5103Loaded = createSelector(
  getUt5103State,
  (state: State) => state.loaded
);

export const getUt5103Error = createSelector(
  getUt5103State,
  (state: State) => state.error
);
export const getUt5103Data = createSelector(
  getUt5103State,
  (state: State) => state.data
);
export const getUt5103DataLog = createSelector(
  getUt5103State,
  (state: State) => state.dataLog
);
export const getUt5103HatKodList = createSelector(
  getUt5103State,
  (state: State) => state.hatKoduList
);
export const getUt5103TankNoList = createSelector(
  getUt5103State,
  (state: State) => state.tankNoList
);
export const getUt5103VardiyaUretimleri = createSelector(
  getUt5103State,
  (state: State) => state.vardiyaUretimleri
);
export const getUt5103Code = createSelector(
  getUt5103State,
  (state: State) => state.utTankAsitlemeCode
);
export const getUt5103TankAsitlemeLimitler = createSelector(
  getUt5103State,
  (state: State) => state.utTankAsitlemeLimitList
);
