import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1211_FEATURE_KEY, State } from './kt-1211.reducer';

// Lookup the 'Kt1211' feature state managed by NgRx
export const getKt1211State = createFeatureSelector<State>(KT_1211_FEATURE_KEY);

export const getKt1211Loaded = createSelector(getKt1211State, (state: State) => state.loaded);

export const getKt1211Error = createSelector(getKt1211State, (state: State) => state.error);

export const getKt1211Data = createSelector(getKt1211State, (state: State) => state.data);

export const getKt1211NumuneBazlari = createSelector(getKt1211State, (state: State) => state.numuneBazlari);

export const getKt1211NumuneYerleri = createSelector(getKt1211State, (state: State) => state.numuneYerleri);

export const getKt1211NumuneYonleri = createSelector(getKt1211State, (state: State) => state.numuneYonleri);

export const getKt1211DefaultRow = createSelector(getKt1211State, (state: State) => state.defaultRow);
