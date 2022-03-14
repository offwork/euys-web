import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1215_FEATURE_KEY, State } from './kt-1215.reducer';

// Lookup the 'Kt1215' feature state managed by NgRx
export const getKt1215State = createFeatureSelector<State>(KT_1215_FEATURE_KEY);

export const getKt1215Loaded = createSelector(getKt1215State, (state: State) => state.loaded);

export const getKt1215Error = createSelector(getKt1215State, (state: State) => state.error);

export const getKt1215Data = createSelector(getKt1215State, (state: State) => state.data);

export const getKt1215DefaultRow = createSelector(getKt1215State, (state: State) => state.defaultRow);