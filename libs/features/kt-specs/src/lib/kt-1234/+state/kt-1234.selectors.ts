import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1234_FEATURE_KEY, State } from './kt-1234.reducer';

// Lookup the 'Kt1234' feature state managed by NgRx
export const getKt1234State = createFeatureSelector<State>(KT_1234_FEATURE_KEY);

export const getKt1234Loaded = createSelector(getKt1234State, (state: State) => state.loaded);

export const getKt1234Error = createSelector(getKt1234State, (state: State) => state.error);

export const getKt1234Data = createSelector(getKt1234State, (state: State) => state.data);

export const getKt1234DefaultRow = createSelector(getKt1234State, (state: State) => state.defaultRow);
