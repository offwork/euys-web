import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1224_FEATURE_KEY, State } from './kt-1224.reducer';

// Lookup the 'Kt1224' feature state managed by NgRx

export const getKt1224State = createFeatureSelector<State>(KT_1224_FEATURE_KEY);

export const getKt1224Loaded = createSelector(getKt1224State, (state: State) => state.loaded);

export const getKt1224Error = createSelector(getKt1224State, (state: State) => state.error);

export const getKt1224Data = createSelector(getKt1224State, (state: State) => state.data);

export const getKt1224DefaultRow = createSelector(getKt1224State, (state: State) => state.defaultRow);

