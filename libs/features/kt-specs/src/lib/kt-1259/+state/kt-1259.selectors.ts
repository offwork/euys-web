import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1259_FEATURE_KEY, State } from './kt-1259.reducer';

// Lookup the 'Kt1259' feature state managed by NgRx
export const getKt1259State = createFeatureSelector<State>(KT_1259_FEATURE_KEY);

export const getKt1259Loaded = createSelector(getKt1259State, (state: State) => state.loaded);

export const getKt1259Error = createSelector(getKt1259State, (state: State) => state.error);

export const getKt1259Data = createSelector(getKt1259State, (state: State) => state.data);

export const getKt1259DefaultRow = createSelector(getKt1259State, (state: State) => state.defaultRow);