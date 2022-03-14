import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1225_FEATURE_KEY, State } from './kt-1225.reducer';

// Lookup the 'Kt1225' feature state managed by NgRx
export const getKt1225State = createFeatureSelector<State>(KT_1225_FEATURE_KEY);

export const getKt1225Loaded = createSelector(getKt1225State, (state: State) => state.loaded);

export const getKt1225Error = createSelector(getKt1225State, (state: State) => state.error);

export const getKt1225Data = createSelector(getKt1225State, (state: State) => state.data);

export const getKt1225DefaultRow = createSelector(getKt1225State, (state: State) => state.defaultRow);
