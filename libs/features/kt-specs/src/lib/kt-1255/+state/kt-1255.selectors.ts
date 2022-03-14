import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1255_FEATURE_KEY, State } from './kt-1255.reducer';

// Lookup the 'Kt1255' feature state managed by NgRx
export const getKt1255State = createFeatureSelector<State>(KT_1255_FEATURE_KEY);

export const getKt1255Loaded = createSelector(getKt1255State, (state: State) => state.loaded);

export const getKt1255Error = createSelector(getKt1255State, (state: State) => state.error);

export const getKt1255Data = createSelector(getKt1255State, (state: State) => state.data);

export const getKt1255DefaultRow = createSelector(getKt1255State, (state: State) => state.defaultRow);
