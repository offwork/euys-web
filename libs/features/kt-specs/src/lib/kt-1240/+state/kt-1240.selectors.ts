import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1240_FEATURE_KEY, State } from './kt-1240.reducer';

// Lookup the 'Kt1239' feature state managed by NgRx
export const getKt1240State = createFeatureSelector<State>(KT_1240_FEATURE_KEY);

export const getKt1240Loaded = createSelector(getKt1240State, (state: State) => state.loaded);

export const getKt1240Error = createSelector(getKt1240State, (state: State) => state.error);

export const getKt1240Data = createSelector(getKt1240State, (state: State) => state.data);

export const getKt1240DefaultRow = createSelector(getKt1240State, (state: State) => state.defaultRow);


