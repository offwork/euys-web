import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1236_FEATURE_KEY, State } from './kt-1236.reducer';

// Lookup the 'Kt1236' feature state managed by NgRx
export const getKt1236State = createFeatureSelector<State>(KT_1236_FEATURE_KEY);

export const getKt1236Loaded = createSelector(getKt1236State, (state: State) => state.loaded);

export const getKt1236Error = createSelector(getKt1236State, (state: State) => state.error);

export const getKt1236Data = createSelector(getKt1236State, (state: State) => state.data);

export const getKt1236DefaultRow = createSelector(getKt1236State, (state: State) => state.defaultRow);

