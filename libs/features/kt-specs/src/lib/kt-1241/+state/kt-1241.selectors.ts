import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1241_FEATURE_KEY, State } from './kt-1241.reducer';

// Lookup the 'Kt1241' feature state managed by NgRx
export const getKt1241State = createFeatureSelector<State>(KT_1241_FEATURE_KEY);

export const getKt1241Loaded = createSelector(getKt1241State, (state: State) => state.loaded);

export const getKt1241Error = createSelector(getKt1241State, (state: State) => state.error);

export const getKt1241Data = createSelector(getKt1241State, (state: State) => state.data);

export const getKt1241DefaultRow = createSelector(getKt1241State, (state: State) => state.defaultRow);

