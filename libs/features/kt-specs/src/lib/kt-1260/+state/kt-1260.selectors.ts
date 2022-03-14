import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1260_FEATURE_KEY, State } from './kt-1260.reducer';

// Lookup the 'Kt1260' feature state managed by NgRx
export const getKt1260State = createFeatureSelector<State>(KT_1260_FEATURE_KEY);

export const getKt1260Loaded = createSelector(
  getKt1260State,
  (state: State) => state.loaded
);

export const getKt1260Error = createSelector(
  getKt1260State,
  (state: State) => state.error
);

export const getKt1260Data = createSelector(
  getKt1260State,
  (state: State) => state.data
);

export const getKt1260TanimYuzeyDurumulari = createSelector(
  getKt1260State,
  (state: State) => state.tanimYuzeyDurumulari
);

export const getKt1260DefaultRow = createSelector(
  getKt1260State,
  (state: State) => state.defaultRow
);
