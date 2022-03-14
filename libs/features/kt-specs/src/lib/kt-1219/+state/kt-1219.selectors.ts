import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1219_FEATURE_KEY, State } from './kt-1219.reducer';

// Lookup the 'Kt1219' feature state managed by NgRx
export const getKt1219State = createFeatureSelector<State>(KT_1219_FEATURE_KEY);

export const getKt1219Loaded = createSelector(getKt1219State, (state: State) => state.loaded);

export const getKt1219Error = createSelector(getKt1219State, (state: State) => state.error);

export const getKt1219Data = createSelector(getKt1219State, (state: State) => state.data);

export const getKt1219DefaultRow = createSelector(getKt1219State, (state: State) => state.defaultRow);
