import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KAPASITELER_FEATURE_KEY, State } from './kapasiteler.reducer';

// Lookup the 'Kapasiteler' feature state managed by NgRx
export const getKapasitelerState = createFeatureSelector<State>(KAPASITELER_FEATURE_KEY);

export const getKapasitelerLoaded = createSelector(getKapasitelerState, (state: State) => state.loaded);

export const getKapasitelerError = createSelector(getKapasitelerState, (state: State) => state.error);

export const getKapasite = createSelector(getKapasitelerState, (state: State) => state.kapasite);

export const getKapasiteGrid = createSelector(getKapasitelerState, (state: State) => state.dataGrid);

export const getInvalidGrid = createSelector(getKapasitelerState, (state: State) => state.isInvalid);
