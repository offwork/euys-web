import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1247_FEATURE_KEY, State } from './kt-1247.reducer';

// Lookup the 'Kt1247' feature state managed by NgRx
export const getKt1247State = createFeatureSelector<State>(KT_1247_FEATURE_KEY);

export const getKt1247Loaded = createSelector(getKt1247State, (state: State) => state.loaded);

export const getKt1247Error = createSelector(getKt1247State, (state: State) => state.error);

export const getKt1247Data = createSelector(getKt1247State, (state: State) => state.data);

export const getKt1247DefaultRow = createSelector(getKt1247State, (state: State) => state.defaultRow);
