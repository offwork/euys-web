import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1257_FEATURE_KEY, State } from './kt-1257.reducer';

// Lookup the 'Kt1257' feature state managed by NgRx
export const getKt1257State = createFeatureSelector<State>(KT_1257_FEATURE_KEY);

export const getKt1257Loaded = createSelector(getKt1257State, (state: State) => state.loaded);

export const getKt1257Error = createSelector(getKt1257State, (state: State) => state.error);

export const getKt1257Data = createSelector(getKt1257State, (state: State) => state.data);

export const getKt1257DefaultRow = createSelector(getKt1257State, (state: State) => state.defaultRow);
