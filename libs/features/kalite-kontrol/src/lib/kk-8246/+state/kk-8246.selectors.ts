import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KK_8246_FEATURE_KEY, State } from './kk-8246.reducer';

export const getKk8246State = createFeatureSelector<State>(KK_8246_FEATURE_KEY);

export const selectAsitlemeBobinList = createSelector(
  getKk8246State,
  (state: State) => state.asitlemeBobinList
);
export const selectAsitlemeBobinListLoaded = createSelector(
  getKk8246State,
  (state: State) => state.asitlemeBobinListLoaded
);
export const selectBagimsizNumuneGoruntuleme = createSelector(
  getKk8246State,
  (state: State) => state.bagimsizNumuneGoruntuleme
);

export const selectBagimsizNumuneGoruntulemeLoaded = createSelector(
  getKk8246State,
  (state: State) => state.bagimsizNumuneGoruntulemeLoaded
);
export const selectBagimsizMesajBilgileri = createSelector(
  getKk8246State,
  (state: State) => state.bagimsizMesajBilgileri
);

export const selectBagimsizMesajBilgileriLoaded = createSelector(
  getKk8246State,
  (state: State) => state.bagimsizMesajBilgileriLoaded
);
export const selectCplHattiAsitleme = createSelector(
  getKk8246State,
  (state: State) => state.cplHattiAsitleme
);
export const selectCplHattiAsitlemeLoaded = createSelector(
  getKk8246State,
  (state: State) => state.cplHattiAsitlemeLoaded
);
export const selectCplHattiDurulama = createSelector(
  getKk8246State,
  (state: State) => state.cplHattiAsitleme
);
export const selectCplHattiDurulamaLoaded = createSelector(
  getKk8246State,
  (state: State) => state.cplHattiAsitlemeLoaded
);
export const selectPplHattiAsitleme = createSelector(
  getKk8246State,
  (state: State) => state.pplHattiAsitleme
);
export const selectPplHattiAsitlemeLoaded = createSelector(
  getKk8246State,
  (state: State) => state.pplHattiAsitlemeLoaded
);
