import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1254_FEATURE_KEY, State } from './kt-1254.reducer';

// Lookup the 'Kt1254' feature state managed by NgRx
export const getKt1254State = createFeatureSelector<State>(KT_1254_FEATURE_KEY);

export const getKt1254Loaded = createSelector(getKt1254State, (state: State) => state.loaded);

export const getKt1254Error = createSelector(getKt1254State, (state: State) => state.error);

export const getKt1254Data = createSelector(getKt1254State, (state: State) => state.data);

export const getKt1254DefaultRow = createSelector(getKt1254State, (state: State) => state.defaultRow);
