import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1239_FEATURE_KEY, State } from './kt-1239.reducer';

// Lookup the 'Kt1239' feature state managed by NgRx
export const getKt1239State = createFeatureSelector<State>(KT_1239_FEATURE_KEY);

export const getKt1239Loaded = createSelector(getKt1239State, (state: State) => state.loaded);

export const getKt1239Error = createSelector(getKt1239State, (state: State) => state.error);

export const getKt1239Data = createSelector(getKt1239State, (state: State) => state.data);

export const getKt1239DefaultRow = createSelector(getKt1239State, (state: State) => state.defaultRow);
