import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  HEDEF_FIILI_GRAFIK_FEATURE_KEY,
  State,
} from './hedef-fiili-grafik.reducer';

// Lookup the 'HedefFiiliGrafik' feature state managed by NgRx
export const getHedefFiiliGrafikState = createFeatureSelector<State>(
  HEDEF_FIILI_GRAFIK_FEATURE_KEY
);

export const getHedefFiiliGrafikLoaded = createSelector(
  getHedefFiiliGrafikState,
  (state: State) => state.loaded
);

export const getHedefFiiliGrafikError = createSelector(
  getHedefFiiliGrafikState,
  (state: State) => state.error
);

export const getHedefFiiliGrafik = createSelector(
  getHedefFiiliGrafikState,
  (state: State) => state.hedefFiiliGrafik
);

export const getLines = createSelector(
  getHedefFiiliGrafikState,
  (state: State) => state.hatlar
);
