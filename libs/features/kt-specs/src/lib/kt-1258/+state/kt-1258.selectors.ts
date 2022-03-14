import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1258_FEATURE_KEY, State } from './kt-1258.reducer';

// Lookup the 'Kt1258' feature state managed by NgRx
export const getKt1258State = createFeatureSelector<State>(KT_1258_FEATURE_KEY);

export const getKt1258Loaded = createSelector(getKt1258State, (state: State) => state.loaded);

export const getKt1258Error = createSelector(getKt1258State, (state: State) => state.error);

export const getKt1258Data = createSelector(getKt1258State, (state: State) => state.data);

export const getKt1258TanimPuruzBirimleri = createSelector(getKt1258State, (state: State) => state.tanimPuruzBirimleri);

export const getKt1258TanimYuzeyDurumulari = createSelector(getKt1258State, (state: State) => state.tanimYuzeyDurumulari);

export const getKt1258DefaultRow = createSelector(getKt1258State, (state: State) => state.defaultRow);
