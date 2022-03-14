import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LINESPEEDS_FEATURE_KEY, State } from './line-speeds.reducer';

// Lookup the 'LineSpeeds' feature state managed by NgRx
export const getLineSpeedsState = createFeatureSelector<State>(
  LINESPEEDS_FEATURE_KEY
);

export const getLineSpeedsLoaded = createSelector(
  getLineSpeedsState,
  (state: State) => state.loaded
);

export const getLineSpeedsError = createSelector(
  getLineSpeedsState,
  (state: State) => state.error
);

export const getLineSpeedsDownloaded = createSelector(
  getLineSpeedsState,
  (state: State) => state.downloaded
);

export const getLines = createSelector(
  getLineSpeedsState,
  (state: State) => state.hatlar
);
