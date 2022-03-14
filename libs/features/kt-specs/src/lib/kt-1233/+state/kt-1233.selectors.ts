import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1233_FEATURE_KEY, State } from './kt-1233.reducer';

// Lookup the 'Kt1233' feature state managed by NgRx
export const getKt1233State = createFeatureSelector<State>(KT_1233_FEATURE_KEY);

export const getKt1233Loaded = createSelector(getKt1233State, (state: State) => state.loaded);

export const getKt1233Error = createSelector(getKt1233State, (state: State) => state.error);

export const getKt1233Data = createSelector(getKt1233State, (state: State) => state.data);

export const getKt1233DefaultRow = createSelector(getKt1233State, (state: State) => state.defaultRow);
