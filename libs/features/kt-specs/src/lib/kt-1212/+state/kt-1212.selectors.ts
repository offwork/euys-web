import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1212_FEATURE_KEY, State } from './kt-1212.reducer';

// Lookup the 'Kt1212' feature state managed by NgRx
export const getKt1212State = createFeatureSelector<State>(KT_1212_FEATURE_KEY);

export const getKt1212Loaded = createSelector(getKt1212State, (state: State) => state.loaded);

export const getKt1212Error = createSelector(getKt1212State, (state: State) => state.error);

export const getKt1212Data = createSelector(getKt1212State, (state: State) => state.data);

export const getKt1212DefaultRow = createSelector(getKt1212State, (state: State) => state.defaultRow);
