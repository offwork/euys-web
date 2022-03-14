import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1242_FEATURE_KEY, State } from './kt-1242.reducer';

// Lookup the 'Kt1242' feature state managed by NgRx
export const getKt1242State = createFeatureSelector<State>(KT_1242_FEATURE_KEY);

export const getKt1242Loaded = createSelector(getKt1242State, (state: State) => state.loaded);

export const getKt1242Error = createSelector(getKt1242State, (state: State) => state.error);

export const getKt1242Data = createSelector(getKt1242State, (state: State) => state.data);

export const getKt1242DefaultRow = createSelector(getKt1242State, (state: State) => state.defaultRow);
