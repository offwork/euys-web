import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1237_FEATURE_KEY, State } from './kt-1237.reducer';

// Lookup the 'Kt1237' feature state managed by NgRx
export const getKt1237State = createFeatureSelector<State>(KT_1237_FEATURE_KEY);

export const getKt1237Loaded = createSelector(getKt1237State, (state: State) => state.loaded);

export const getKt1237Error = createSelector(getKt1237State, (state: State) => state.error);

export const getKt1237Data = createSelector(getKt1237State, (state: State) => state.data);

export const getKt1237DefaultRow = createSelector(getKt1237State, (state: State) => state.defaultRow);
