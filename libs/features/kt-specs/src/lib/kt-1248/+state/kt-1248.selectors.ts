import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1248_FEATURE_KEY, State } from './kt-1248.reducer';

// Lookup the 'Kt1248' feature state managed by NgRx
export const getKt1248State = createFeatureSelector<State>(KT_1248_FEATURE_KEY);

export const getKt1248Loaded = createSelector(getKt1248State, (state: State) => state.loaded);

export const getKt1248Error = createSelector(getKt1248State, (state: State) => state.error);

export const getKt1248Data = createSelector(getKt1248State, (state: State) => state.data);

export const getKt1248DefaultRow = createSelector(getKt1248State, (state: State) => state.defaultRow);

