import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1261_FEATURE_KEY, State } from './kt-1261.reducer';

// Lookup the 'Kt1261' feature state managed by NgRx
export const getKt1261State = createFeatureSelector<State>(KT_1261_FEATURE_KEY);

export const getKt1261Loaded = createSelector(
  getKt1261State,
  (state: State) => state.loaded
);

export const getKt1261Error = createSelector(
  getKt1261State,
  (state: State) => state.error
);

export const getKt1261Data = createSelector(
  getKt1261State,
  (state: State) => state.data
);

export const getKt1261DefaultRow = createSelector(
  getKt1261State,
  (state: State) => state.defaultRow
);
