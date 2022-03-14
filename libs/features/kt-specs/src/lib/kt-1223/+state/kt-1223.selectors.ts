import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1223_FEATURE_KEY, State } from './kt-1223.reducer';

// Lookup the 'Kt1223' feature state managed by NgRx
export const getKt1223State = createFeatureSelector<State>(KT_1223_FEATURE_KEY);

export const getKt1223Loaded = createSelector(getKt1223State, (state: State) => state.loaded);

export const getKt1223Error = createSelector(getKt1223State, (state: State) => state.error);

export const getKt1223Data = createSelector(getKt1223State, (state: State) => state.data);

export const getKt1223DefaultRow = createSelector(getKt1223State, (state: State) => state.defaultRow);