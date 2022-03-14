import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1226_FEATURE_KEY, State} from './kt-1226.reducer';

// Lookup the 'Kt1226' feature state managed by NgRx
export const getKt1226State = createFeatureSelector<State>(KT_1226_FEATURE_KEY);

export const getKt1226Loaded = createSelector(getKt1226State, (state: State) => state.loaded);

export const getKt1226Error = createSelector(getKt1226State, (state: State) => state.error);

export const getKt1226Data = createSelector(getKt1226State, (state: State) => state.data);

export const getKt1226DefaultRow = createSelector(getKt1226State, (state: State) => state.defaultRow);
