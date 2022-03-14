import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1250_FEATURE_KEY, State } from './kt-1250.reducer';

// Lookup the 'Kt1250' feature state managed by NgRx
export const getKt1250State = createFeatureSelector<State>(KT_1250_FEATURE_KEY);

export const getKt1250Loaded = createSelector(getKt1250State, (state: State) => state.loaded);

export const getKt1250Error = createSelector(getKt1250State, (state: State) => state.error);

export const getKt1250Data = createSelector(getKt1250State, (state: State) => state.data);

export const getKt1250DefaultRow = createSelector(getKt1250State, (state: State) => state.defaultRow);
