import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1217_FEATURE_KEY, State } from './kt-1217.reducer';

// Lookup the 'Kt1217' feature state managed by NgRx
export const getKt1217State = createFeatureSelector<State>(KT_1217_FEATURE_KEY);

export const getKt1217Loaded = createSelector(getKt1217State, (state: State) => state.loaded);

export const getKt1217Error = createSelector(getKt1217State, (state: State) => state.error);

export const getAllKt1217 = createSelector(getKt1217State, (state: State) => state.calYuzdeUzama);

export const getKt1217DefaultRow = createSelector(getKt1217State, (state: State) => state.defaultRow);
