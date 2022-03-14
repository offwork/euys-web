import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1244_FEATURE_KEY, State } from './kt-1244.reducer';

// Lookup the 'Kt1244' feature state managed by NgRx
export const getKt1244State = createFeatureSelector<State>(KT_1244_FEATURE_KEY);

export const getKt1244Loaded = createSelector(getKt1244State, (state: State) => state.loaded);

export const getKt1244Error = createSelector(getKt1244State, (state: State) => state.error);

export const getKt1244Data = createSelector(getKt1244State, (state: State) => state.data);

export const getKt1244DefaultRow = createSelector(getKt1244State, (state: State) => state.defaultRow);

