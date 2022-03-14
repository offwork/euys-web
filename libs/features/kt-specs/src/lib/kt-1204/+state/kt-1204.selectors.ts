import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1204_FEATURE_KEY, State } from './kt-1204.reducer';

// Lookup the 'Kt1204' feature state managed by NgRx
export const getKt1204State = createFeatureSelector<State>(KT_1204_FEATURE_KEY);

export const getKt1204Loaded = createSelector(getKt1204State, (state: State) => state.loaded);

export const getKt1204Error = createSelector(getKt1204State, (state: State) => state.error);

export const getKt1204Data = createSelector(getKt1204State, (state: State) => state.data);

export const getKt1204DefaultRow = createSelector(getKt1204State, (state: State) => state.defaultRow);