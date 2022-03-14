import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1249_FEATURE_KEY, State } from './kt-1249.reducer';

// Lookup the 'Kt1249' feature state managed by NgRx
export const getKt1249State = createFeatureSelector<State>(KT_1249_FEATURE_KEY);

export const getKt1249Loaded = createSelector(getKt1249State, (state: State) => state.loaded);

export const getKt1249Error = createSelector(getKt1249State, (state: State) => state.error);

export const getKt1249Data = createSelector(getKt1249State, (state: State) => state.data);

export const getKt1249DefaultRow = createSelector(getKt1249State, (state: State) => state.defaultRow);

