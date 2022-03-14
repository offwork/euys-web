import { Combo } from '@euys/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KK_8101_FEATURE_KEY, State } from './kk-8101.reducer';

// Lookup the 'Kk8101' feature state managed by NgRx
export const getKk8101State = createFeatureSelector<State>(KK_8101_FEATURE_KEY);

export const getKk8101KusurListLoaded = createSelector(
  getKk8101State,
  (state: State) => state.kusurListLoaded
);

export const getKk8101KusurList = createSelector(
  getKk8101State,
  (state: State) => state.kusurList
);

export const getKk8101KusurSinifiListLoaded = createSelector(
  getKk8101State,
  (state: State) => state.kusurSinifiListLoaded
);

export const getKk8101KusurSinifiList = createSelector(
  getKk8101State,
  (state: State) => state.kusurSinifiList
);

export const getKk8101KusurAnaListLoaded = createSelector(
  getKk8101State,
  (state: State) => state.kusurAnaListLoaded
);

export const getKk8101KusurAnaList = createSelector(
  getKk8101State,
  (state: State) => state.kusurAnaList
);

export const getKalitelerListLoaded = createSelector(
  getKk8101State,
  (state: State) => state.kalitelerListLoaded
);

export const getKalitelerList = createSelector(
  getKk8101State,
  (state: State) => state.kalitelerList
);

export const getKk8101UtHatListLoaded = createSelector(
  getKk8101State,
  (state: State) => state.utHatListLoaded
);

export const getKk8101UtHatList = createSelector(
  getKk8101State,
  (state: State) => state.utHatList
);

export const getKk8101DefaultKusur = createSelector(
  getKk8101State,
  (state: State) => state.defaultKusur
);

export const getKk8101KusurKatalogViewList = createSelector(
  getKk8101State,
  (state: State) => state.kusurKtlgViewList
);

export const getKk8101KusurKatalogViewListLoaded = createSelector(
  getKk8101State,
  (state: State) => state.kusurKtlgViewListLoaded
);

export const getKk8101CanAddNewKatalog = createSelector(
  getKk8101State,
  (state: State) =>
    state.kusurKtlgViewList.every(
      katalogView => !!katalogView.kkKusurKtlgHat.etag
    )
);

export const getNewKatalogView = createSelector(
  getKk8101State,
  (state: State) => state.newKatalogView
);

export const selectKatalogHatComboList = createSelector(
  getKk8101State,
  (state: State) => state.katalogHatComboList
);

export const selectKatalogHatComboListLoaded = createSelector(
  getKk8101State,
  (state: State) => state.katalogHatComboListLoaded
);

export const selectKk8101KtUrunList = createSelector(
  getKk8101State,
  (state: State) => state.ktUrunList
);

export const selectKk8101KtUrunListLoaded = createSelector(
  getKk8101State,
  (state: State) => state.ktUrunListLoaded
);

export const selectUrunAdiByKodu = (urunKodu: string) =>
  createSelector(
    selectKk8101KtUrunList,
    (state: Combo[]) => state.find(({ kodu }) => kodu === urunKodu)?.adi
  );

export const selectKatalogGorselList = createSelector(
  getKk8101State,
  (state: State) => state.katalogGorselList
);

export const selectKatalogGorselListLoaded = createSelector(
  getKk8101State,
  (state: State) => state.katalogGorselListLoaded
);

export const selectAddKatalogGorselSuccess = createSelector(
  getKk8101State,
  (state: State) => state.addKatalogGorselSuccess
);
