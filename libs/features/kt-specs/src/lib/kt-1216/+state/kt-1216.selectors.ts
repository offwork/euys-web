import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1216_FEATURE_KEY, State } from './kt-1216.reducer';

// Lookup the 'Kt1216' feature state managed by NgRx
export const getKt1216State = createFeatureSelector<State>(KT_1216_FEATURE_KEY);

export const getKt1216Loaded = createSelector(getKt1216State, (state: State) => state.loaded);

export const getKt1216Error = createSelector(getKt1216State, (state: State) => state.error);

export const getKt1216Data = createSelector(getKt1216State, (state: State) => state.data);

export const getKt1216DefaultRow = createSelector(getKt1216State, (state: State) => state.defaultRow);