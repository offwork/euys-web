import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1231_FEATURE_KEY, State } from './kt-1231.reducer';

// Lookup the 'Kt1231' feature state managed by NgRx
export const getKt1231State = createFeatureSelector<State>(KT_1231_FEATURE_KEY);

export const getKt1231Loaded = createSelector(getKt1231State, (state: State) => state.loaded);

export const getKt1231Error = createSelector(getKt1231State, (state: State) => state.error);

export const getKt1231Data = createSelector(getKt1231State, (state: State) => state.data);

export const getKt1231DefaultRow = createSelector(getKt1231State, (state: State) => state.defaultRow);