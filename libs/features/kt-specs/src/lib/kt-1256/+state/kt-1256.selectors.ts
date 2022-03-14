import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1256_FEATURE_KEY, State } from './kt-1256.reducer';

// Lookup the 'Kt1256' feature state managed by NgRx
export const getKt1256State = createFeatureSelector<State>(KT_1256_FEATURE_KEY);

export const getKt1256Loaded = createSelector(getKt1256State, (state: State) => state.loaded);

export const getKt1256Error = createSelector(getKt1256State, (state: State) => state.error);

export const getKt1256Data = createSelector(getKt1256State, (state: State) => state.data);

export const getKt1256YaglamaMarkalari = createSelector(getKt1256State, (state: State) => state.yaglamaMarkalari);

export const getKt1256YaglamaDurumlari = createSelector(getKt1256State, (state: State) => state.yaglamaDurumlari);

export const getKt1256YaglamaYuzeyleri = createSelector(getKt1256State, (state: State) => state.yaglamaYuzeyleri);

export const getKt1256YaglamaTipleri = createSelector(getKt1256State, (state: State) => state.yaglamaTipleri);

export const getKt1256DefaultRow = createSelector(getKt1256State, (state: State) => state.defaultRow);
