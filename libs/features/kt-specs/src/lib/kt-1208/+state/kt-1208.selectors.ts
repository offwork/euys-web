import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1208_FEATURE_KEY, State } from './kt-1208.reducer';

// Lookup the 'Kt1208' feature state managed by NgRx
export const getKt1208State = createFeatureSelector<State>(KT_1208_FEATURE_KEY);

export const getKt1208Loaded = createSelector(getKt1208State, (state: State) => state.loaded);

export const getKt1208Error = createSelector(getKt1208State, (state: State) => state.error);

export const getKt1208Data = createSelector(getKt1208State, (state: State) => state.data);

export const getKt1208DefaultRow = createSelector(getKt1208State, (state: State) => state.defaultRow);