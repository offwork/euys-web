import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PFDM_KALINLIK_CAP_FEATURE_KEY,
  State,
} from './pfdm-kalinlik-cap.reducer';

// Lookup the 'PfdmKalinlikCap' feature state managed by NgRx
export const getPfdmKalinlikCapState = createFeatureSelector<State>(
  PFDM_KALINLIK_CAP_FEATURE_KEY
);

export const getPfdmKalinlikCapLoaded = createSelector(
  getPfdmKalinlikCapState,
  (state: State) => state.loaded
);

export const getPfdmKalinlikCapError = createSelector(
  getPfdmKalinlikCapState,
  (state: State) => state.error
);

export const getPfdmKalinlikCapData = createSelector(
  getPfdmKalinlikCapState,
  (state: State) => state.data
);

export const getPfdmKalinlikCapDefaultRow = createSelector(
  getPfdmKalinlikCapState,
  (state: State) => state.defaultRow
);
