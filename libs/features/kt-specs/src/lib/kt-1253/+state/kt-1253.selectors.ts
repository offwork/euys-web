import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1253_FEATURE_KEY, State } from './kt-1253.reducer';

// Lookup the 'Kt1253' feature state managed by NgRx
export const getKt1253State = createFeatureSelector<State>(KT_1253_FEATURE_KEY);

export const getKt1253Loaded = createSelector(getKt1253State, (state: State) => state.loaded);

export const getKt1253Error = createSelector(getKt1253State, (state: State) => state.error);

export const getKt1253Data = createSelector(getKt1253State, (state: State) => state.data);

export const getKt1253DefaultRow = createSelector(getKt1253State, (state: State) => state.defaultRow);
