import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1221_FEATURE_KEY, State } from './kt-1221.reducer';

// Lookup the 'Kt1221' feature state managed by NgRx
export const getKt1221State = createFeatureSelector<State>(KT_1221_FEATURE_KEY);

export const getKt1221Loaded = createSelector(getKt1221State, (state: State) => state.loaded);

export const getKt1221Error = createSelector(getKt1221State, (state: State) => state.error);

export const getKt1221Data = createSelector(getKt1221State, (state: State) => state.data);

export const getKt1221DefaultRow = createSelector(getKt1221State, (state: State) => state.defaultRow);