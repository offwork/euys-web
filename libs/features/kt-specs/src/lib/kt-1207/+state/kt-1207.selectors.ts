import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1207_FEATURE_KEY, State } from './kt-1207.reducer';

// Lookup the 'Kt1207' feature state managed by NgRx
export const getKt1207State = createFeatureSelector<State>(KT_1207_FEATURE_KEY);

export const getKt1207Loaded = createSelector(getKt1207State, (state: State) => state.loaded);

export const getKt1207Error = createSelector(getKt1207State, (state: State) => state.error);

export const getKt1207Data = createSelector(getKt1207State, (state: State) => state.data);

export const getKt1207DefaultRow = createSelector(getKt1207State, (state: State) => state.defaultRow);
