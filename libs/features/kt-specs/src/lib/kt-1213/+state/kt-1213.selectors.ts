import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1213_FEATURE_KEY, State } from './kt-1213.reducer';

export const getKt1213State = createFeatureSelector<State>(KT_1213_FEATURE_KEY);

export const getKt1213Loaded = createSelector(getKt1213State, (state: State) => state.loaded);

export const getKt1213Error = createSelector(getKt1213State, (state: State) => state.error);

export const getKt1213Data = createSelector(getKt1213State, (state: State) => state.data);

export const getKt1213DefaultRow = createSelector(getKt1213State, (state: State) => state.defaultRow);
