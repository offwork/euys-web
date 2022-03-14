import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1243_FEATURE_KEY, State } from './kt-1243.reducer';

// Lookup the 'Kt1243' feature state managed by NgRx
export const getKt1243State = createFeatureSelector<State>(KT_1243_FEATURE_KEY);

export const getKt1243Loaded = createSelector(getKt1243State, (state: State) => state.loaded);

export const getKt1243Error = createSelector(getKt1243State, (state: State) => state.error);

export const getKt1243Data = createSelector(getKt1243State, (state: State) => state.data);

export const getKt1243DefaultRow = createSelector(getKt1243State, (state: State) => state.defaultRow);
