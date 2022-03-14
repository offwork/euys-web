import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1201_FEATURE_KEY, State } from './kt-1201.reducer';

// Lookup the 'Kt1201' feature state managed by NgRx
export const getKt1201State = createFeatureSelector<State>(KT_1201_FEATURE_KEY);

export const getKt1201Loaded = createSelector(getKt1201State, (state: State) => state.loaded);

export const getKt1201Error = createSelector(getKt1201State, (state: State) => state.error);

export const getKt1201Data = createSelector(getKt1201State, (state: State) => state.data);

export const getKt1201DefaultRow = createSelector(getKt1201State, (state: State) => state.defaultRow);
