import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1202_FEATURE_KEY, State } from './kt-1202.reducer';

// Lookup the 'Kt1202' feature state managed by NgRx
export const getKt1202State = createFeatureSelector<State>(KT_1202_FEATURE_KEY);

export const getKt1202Loaded = createSelector(getKt1202State, (state: State) => state.loaded);

export const getKt1202Error = createSelector(getKt1202State, (state: State) => state.error);

export const getKt1202Data = createSelector(getKt1202State, (state: State) => state.data);

export const getKt1202DefaultRow = createSelector(getKt1202State, (state: State) => state.defaultRow);
