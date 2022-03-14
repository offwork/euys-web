import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1238_FEATURE_KEY, State } from './kt-1238.reducer';

// Lookup the 'Kt1238' feature state managed by NgRx
export const getKt1238State = createFeatureSelector<State>(KT_1238_FEATURE_KEY);

export const getKt1238Loaded = createSelector(getKt1238State, (state: State) => state.loaded);

export const getKt1238Error = createSelector(getKt1238State, (state: State) => state.error);

export const getKt1238Data = createSelector(getKt1238State, (state: State) => state.data);

export const getKt1238DefaultRow = createSelector(getKt1238State, (state: State) => state.defaultRow);
