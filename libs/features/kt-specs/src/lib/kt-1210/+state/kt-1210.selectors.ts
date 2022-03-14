import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1210_FEATURE_KEY, State } from './kt-1210.reducer';

// Lookup the 'Kt1210' feature state managed by NgRx
export const getKt1210State = createFeatureSelector<State>(KT_1210_FEATURE_KEY);

export const getKt1210Loaded = createSelector(getKt1210State, (state: State) => state.loaded);

export const getKt1210Error = createSelector(getKt1210State, (state: State) => state.error);

export const getKt1210Data = createSelector(getKt1210State, (state: State) => state.data);

export const getKt1210DefaultRow = createSelector(getKt1210State, (state: State) => state.defaultRow);

