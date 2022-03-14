import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1205_FEATURE_KEY, State } from './kt-1205.reducer';

// Lookup the 'Kt1205' feature state managed by NgRx
export const getKt1205State = createFeatureSelector<State>(KT_1205_FEATURE_KEY);

export const getKt1205Loaded = createSelector(getKt1205State, (state: State) => state.loaded);

export const getKt1205Error = createSelector(getKt1205State, (state: State) => state.error);

export const getKt1205Data = createSelector(getKt1205State, (state: State) => state.data);

export const getKt1205DefaultRow = createSelector(getKt1205State, (state: State) => state.defaultRow);
