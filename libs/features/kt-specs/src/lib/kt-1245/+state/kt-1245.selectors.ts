import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1245_FEATURE_KEY, State } from './kt-1245.reducer';

// Lookup the 'Kt1245' feature state managed by NgRx
export const getKt1245State = createFeatureSelector<State>(KT_1245_FEATURE_KEY);

export const getKt1245Loaded = createSelector(getKt1245State, (state: State) => state.loaded);

export const getKt1245Error = createSelector(getKt1245State, (state: State) => state.error);

export const getKt1245Data = createSelector(getKt1245State, (state: State) => state.data);

export const getKt1245DefaultRow = createSelector(getKt1245State, (state: State) => state.defaultRow);

