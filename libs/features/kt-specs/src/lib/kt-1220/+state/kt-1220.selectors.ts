import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1220_FEATURE_KEY, State } from './kt-1220.reducer';

// Lookup the 'Kt1220' feature state managed by NgRx
export const getKt1220State = createFeatureSelector<State>(KT_1220_FEATURE_KEY);

export const getKt1220Loaded = createSelector(getKt1220State, (state: State) => state.loaded);

export const getKt1220Error = createSelector(getKt1220State, (state: State) => state.error);

export const getKt1220Data = createSelector(getKt1220State, (state: State) => state.data);

export const getKt1220DefaultRow = createSelector(getKt1220State, (state: State) => state.defaultRow);
