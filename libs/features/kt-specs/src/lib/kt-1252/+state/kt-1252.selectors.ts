import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1252_FEATURE_KEY, State } from './kt-1252.reducer';

// Lookup the 'Kt1252' feature state managed by NgRx
export const getKt1252State = createFeatureSelector<State>(KT_1252_FEATURE_KEY);

export const getKt1252Loaded = createSelector(getKt1252State, (state: State) => state.loaded);

export const getKt1252Error = createSelector(getKt1252State, (state: State) => state.error);

export const getKt1252Data = createSelector(getKt1252State, (state: State) => state.data);

export const getKt1252DefaultRow = createSelector(getKt1252State, (state: State) => state.defaultRow);
