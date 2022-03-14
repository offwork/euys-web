import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1232_FEATURE_KEY, State } from './kt-1232.reducer';

// Lookup the 'Kt1232' feature state managed by NgRx
export const getKt1232State = createFeatureSelector<State>(KT_1232_FEATURE_KEY);

export const getKt1232Loaded = createSelector(getKt1232State, (state: State) => state.loaded);

export const getKt1232Error = createSelector(getKt1232State, (state: State) => state.error);

export const getKt1232Data = createSelector(getKt1232State, (state: State) => state.data);

export const getKt1232DefaultRow = createSelector(getKt1232State, (state: State) => state.defaultRow);
