import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COEFFICIENT_INPUT_FEATURE_KEY, State } from './katsayi-giris.reducer';

// Lookup the 'CoefficientInput' feature state managed by NgRx
export const getCoefficientInputState = createFeatureSelector<State>(COEFFICIENT_INPUT_FEATURE_KEY);

export const getCoefficientInputLoaded = createSelector(getCoefficientInputState, (state: State) => state.loaded);

export const getCoefficientInputError = createSelector(getCoefficientInputState, (state: State) => state.error);

export const getLeftTreeList = createSelector(getCoefficientInputState, (state: State) => state.treeView);

export const getDataGrid = createSelector(getCoefficientInputState, (state: State) => state.dataGrid);

export const getCoefficients = createSelector(getCoefficientInputState, (state: State) => state.coefficients);

export const getInvalidGrid = createSelector(getCoefficientInputState, (state: State) => state.isInvalid);
