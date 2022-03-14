import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1209_FEATURE_KEY, State } from './kt-1209.reducer';

// Lookup the 'Kt1209' feature state managed by NgRx
export const getKt1209State = createFeatureSelector<State>(KT_1209_FEATURE_KEY);

export const getKt1209Loaded = createSelector(getKt1209State, (state: State) => state.loaded);

export const getKt1209Error = createSelector(getKt1209State, (state: State) => state.error);

export const getKt1209Data = createSelector(getKt1209State, (state: State) => state.data);

export const getKt1209DefaultRow = createSelector(getKt1209State, (state: State) => state.defaultRow)

