import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1222_FEATURE_KEY, State } from './kt-1222.reducer';

// Lookup the 'Kt1222' feature state managed by NgRx
export const getKt1222State = createFeatureSelector<State>(KT_1222_FEATURE_KEY);

export const getKt1222Loaded = createSelector(getKt1222State, (state: State) => state.loaded);

export const getKt1222Error = createSelector(getKt1222State, (state: State) => state.error);

export const getKt1222Data = createSelector(getKt1222State, (state: State) => state.data);

export const getKt1222DefaultRow = createSelector(getKt1222State, (state: State) => state.defaultRow);