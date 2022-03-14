import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UT_5104_FEATURE_KEY, State } from './ut-5104.reducer';

// Lookup the 'Ut5104' feature state managed by NgRx
export const getUt5104State = createFeatureSelector<State>(UT_5104_FEATURE_KEY);

export const getUt5104Loading = createSelector(
  getUt5104State,
  (state: State) => state.loading
);

export const getUt5104HatList = createSelector(
  getUt5104State,
  (state: State) => state.hatList
);

export const getUt5104TankList = createSelector(
  getUt5104State,
  (state: State) => state.tankList
);

export const getUt5104isUpdate = createSelector(
  getUt5104State,
  (state: State) => state.isUpdate
);

export const getUt5104utTankDurulamaLimit = createSelector(
  getUt5104State,
  (state: State) => state.utTankDurulamaLimit
);
