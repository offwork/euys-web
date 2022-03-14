import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1246_FEATURE_KEY, State } from './kt-1246.reducer';

// Lookup the 'Kt1246' feature state managed by NgRx
export const getKt1246State = createFeatureSelector<State>(KT_1246_FEATURE_KEY);

export const getKt1246Loaded = createSelector(getKt1246State, (state: State) => state.loaded);

export const getKt1246Error = createSelector(getKt1246State, (state: State) => state.error);

export const getKt1246Data = createSelector(getKt1246State, (state: State) => state.data);

export const getKt1246DefaultRow = createSelector(getKt1246State, (state: State) => state.defaultRow);
