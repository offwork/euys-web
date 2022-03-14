import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1218_FEATURE_KEY, State } from './kt-1218.reducer';

// Lookup the 'Kt1218' feature state managed by NgRx
export const getKt1218State = createFeatureSelector<State>(KT_1218_FEATURE_KEY);

export const getKt1218Loaded = createSelector(getKt1218State, (state: State) => state.loaded);

export const getKt1218Error = createSelector(getKt1218State, (state: State) => state.error);

export const getKt1218Data = createSelector(getKt1218State, (state: State) => state.data);

export const getKt1218DefaultRow = createSelector(getKt1218State, (state: State) => state.defaultRow);
