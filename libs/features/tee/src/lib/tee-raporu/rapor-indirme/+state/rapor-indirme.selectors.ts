import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RAPOR_INDIRME_FEATURE_KEY, State, raporIndirmeAdapter } from './rapor-indirme.reducer';

// Lookup the 'RaporIndirme' feature state managed by NgRx
export const getRaporIndirmeState = createFeatureSelector<State>(RAPOR_INDIRME_FEATURE_KEY);

const { selectAll, selectEntities } = raporIndirmeAdapter.getSelectors();

export const getRaporIndirmeLoaded = createSelector(getRaporIndirmeState, (state: State) => state.loaded);

export const getRaporIndirmeError = createSelector(getRaporIndirmeState, (state: State) => state.error);

export const getAllRaporIndirme = createSelector(getRaporIndirmeState, (state: State) => selectAll(state));

export const getRaporIndirmeEntities = createSelector(getRaporIndirmeState, (state: State) => selectEntities(state));

export const getSelectedId = createSelector(getRaporIndirmeState, (state: State) => state.selectedId);

export const getSelected = createSelector(
  getRaporIndirmeEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
