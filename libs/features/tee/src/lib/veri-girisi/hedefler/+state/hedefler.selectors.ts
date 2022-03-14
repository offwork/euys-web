import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HEDEFLER_FEATURE_KEY, State } from './hedefler.reducer';

// Lookup the 'Hedefler' feature state managed by NgRx
export const getHedeflerState = createFeatureSelector<State>(HEDEFLER_FEATURE_KEY);

export const getHedeflerLoaded = createSelector(getHedeflerState, (state: State) => state.loaded);

export const getHedeflerError = createSelector(getHedeflerState, (state: State) => state.error);

export const getLeftTreeList = createSelector(getHedeflerState, (state: State) => state.treeView);

export const getDataGrid = createSelector(getHedeflerState, (state: State) => state.dataGrid);

export const getTargets = createSelector(getHedeflerState, (state: State) => state.hedefler);

export const getInvalidGrid = createSelector(getHedeflerState, (state: State) => state.isInvalid);
