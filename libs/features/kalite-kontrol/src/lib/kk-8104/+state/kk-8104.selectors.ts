import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KK_8104_FEATURE_KEY, State } from './kk-8104.reducer';

// Lookup the 'Kk8104' feature state managed by NgRx
export const getKk8104State = createFeatureSelector<State>(KK_8104_FEATURE_KEY);

export const selectOprBilgilendirmeData = createSelector(
  getKk8104State,
  (state: State) => state.oprBilgilendirmeData
);

export const selectOprBilgilendirmeDataLoaded = createSelector(
  getKk8104State,
  (state: State) => state.oprBilgilendirmeDataLoaded
);

export const selectOprBilgilendirmeList = createSelector(
  getKk8104State,
  (state: State) => state.oprBilgilendirmeList
);

export const selectOprBilgilendirmeListLoaded = createSelector(
  getKk8104State,
  (state: State) => state.oprBilgilendirmeListLoaded
);

export const selectOprBilgiGorselList = createSelector(
  getKk8104State,
  (state: State) => state.oprBilgilendirmeGorselList
);

export const selectAddOprBilgiGorselSuccess = createSelector(
  getKk8104State,
  (state: State) => state.addKatalogGorselSuccess
);

export const selectOprBilgiGorselListLoaded = createSelector(
  getKk8104State,
  (state: State) => state.oprBilgilendirmeGorselListLoaded
);
