import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1203_FEATURE_KEY, State } from './kt-1203.reducer';

// Lookup the 'Kt1203' feature state managed by NgRx
export const getKt1203State = createFeatureSelector<State>(KT_1203_FEATURE_KEY);

export const getKt1203Loaded = createSelector(getKt1203State, (state: State) => state.loaded);

export const getKt1203Error = createSelector(getKt1203State, (state: State) => state.error);

export const getKt1203Data = createSelector(getKt1203State, (state: State) => state.data);

export const getKt1203DefaultRow = createSelector(getKt1203State, (state: State) => state.defaultRow);
