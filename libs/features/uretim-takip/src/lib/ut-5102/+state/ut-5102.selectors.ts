import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UT_5102_FEATURE_KEY, State } from './ut-5102.reducer';

// Lookup the 'Ut5102' feature state managed by NgRx
export const getUt5102State = createFeatureSelector<State>(UT_5102_FEATURE_KEY);

export const getUt5102Loading = createSelector(
  getUt5102State,
  (state: State) => state.loading
);

export const getUt5102HatList = createSelector(
  getUt5102State,
  (state: State) => state.hatList
);

export const getUt5102TankList = createSelector(
  getUt5102State,
  (state: State) => state.tankList
);

export const getUt5102isUpdate = createSelector(
  getUt5102State,
  (state: State) => state.isUpdate
);

export const getUt5102utTankAsitlemeLimit = createSelector(
  getUt5102State,
  (state: State) => state.utTankAsitlemeLimit
);
