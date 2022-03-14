import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1230_FEATURE_KEY, State } from './kt-1230.reducer';

// Lookup the 'Kt1230' feature state managed by NgRx
export const getKt1230State = createFeatureSelector<State>(KT_1230_FEATURE_KEY);

export const getKt1230Loaded = createSelector(getKt1230State, (state: State) => state.loaded);

export const getKt1230Error = createSelector(getKt1230State, (state: State) => state.error);

export const getKt1230Data = createSelector(getKt1230State, (state: State) => state.data);

export const getKt1230DefaultRow = createSelector(getKt1230State, (state: State) => state.defaultRow);
