import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1235_FEATURE_KEY, State } from './kt-1235.reducer';

// Lookup the 'Kt1235' feature state managed by NgRx
export const getKt1235State = createFeatureSelector<State>(KT_1235_FEATURE_KEY);

export const getKt1235Loaded = createSelector(getKt1235State, (state: State) => state.loaded);

export const getKt1235Error = createSelector(getKt1235State, (state: State) => state.error);

export const getKt1235Data = createSelector(getKt1235State, (state: State) => state.data);

export const getKt1235DefaultRow = createSelector(getKt1235State, (state: State) => state.defaultRow);
