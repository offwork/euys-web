import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1206_FEATURE_KEY, State } from './kt-1206.reducer';

// Lookup the 'Kt1206' feature state managed by NgRx
export const getKt1206State = createFeatureSelector<State>(KT_1206_FEATURE_KEY);

export const getKt1206Loaded = createSelector(getKt1206State, (state: State) => state.loaded);

export const getKt1206Error = createSelector(getKt1206State, (state: State) => state.error);

export const getKt1206Data = createSelector(getKt1206State, (state: State) => state.data);

export const getKt1206DefaultRow = createSelector(getKt1206State, (state: State) => state.defaultRow);
