import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1214_FEATURE_KEY, State } from './kt-1214.reducer';

// Lookup the 'Kt1214' feature state managed by NgRx
export const getKt1214State = createFeatureSelector<State>(KT_1214_FEATURE_KEY);

export const getKt1214Loaded = createSelector(getKt1214State, (state: State) => state.loaded);

export const getKt1214Error = createSelector(getKt1214State, (state: State) => state.error);

export const getKt1214Data = createSelector(getKt1214State, (state: State) => state.data);

export const getKt1214DefaultRow = createSelector(getKt1214State, (state: State) => state.defaultRow);
