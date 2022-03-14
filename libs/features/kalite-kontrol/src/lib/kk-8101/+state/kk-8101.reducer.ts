import {
  Combo,
  ErrorModel,
  Hat,
  KkKusur,
  KkKusurAna,
  KkKusurKtlgGorsel,
  KkStKusurSinifi,
  KusurKatalogView,
  KusurKoduKayit,
} from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as Kk8101Actions from './kk-8101.actions';

export const KK_8101_FEATURE_KEY = 'kk8101';
export interface State {
  kusurList: KkKusur[];
  kusurListLoaded: boolean;
  kusurSinifiList: KkStKusurSinifi[];
  kusurSinifiListLoaded: boolean;
  kusurAnaList: KkKusurAna[];
  kusurAnaListLoaded: boolean;
  utHatList: Hat[];
  utHatListLoaded: boolean;
  defaultKusur?: KusurKoduKayit;
  kusurKtlgViewList: KusurKatalogView[];
  kusurKtlgViewListLoaded: boolean;
  newKatalogView: KusurKatalogView;
  katalogHatComboList: string[];
  katalogHatComboListLoaded: boolean;
  kalitelerList: Combo[];
  kalitelerListLoaded: boolean;
  ktUrunList: Combo[];
  ktUrunListLoaded: boolean;
  katalogGorselList: KkKusurKtlgGorsel[];
  katalogGorselListLoaded: boolean;
  addKatalogGorselSuccess: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  kusurList: [],
  kusurSinifiList: [],
  kusurAnaList: [],
  utHatList: [],
  kalitelerList: [],
  kalitelerListLoaded: false,
  ktUrunList: [],
  kusurListLoaded: false,
  kusurSinifiListLoaded: false,
  kusurAnaListLoaded: false,
  utHatListLoaded: false,
  kusurKtlgViewList: null,
  kusurKtlgViewListLoaded: false,
  newKatalogView: null,
  katalogHatComboList: null,
  katalogHatComboListLoaded: false,
  katalogGorselList: [],
  katalogGorselListLoaded: false,
  addKatalogGorselSuccess: false,
  ktUrunListLoaded: false,
};

const kk8101Reducer = createReducer(
  initialState,
  on(Kk8101Actions.initKusurListSuccess, (state, { data }) => ({
    ...state,
    kusurListLoaded: true,
    kusurList: data,
  })),
  on(Kk8101Actions.initKusurListFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8101Actions.initKusurSinifiListSuccess, (state, { data }) => ({
    ...state,
    kusurListLoaded: true,
    kusurSinifiList: data,
  })),
  on(Kk8101Actions.initKusurSinifiListFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8101Actions.initKusurAnaListSuccess, (state, { data }) => ({
    ...state,
    kusurAnaListLoaded: true,
    kusurAnaList: data,
  })),
  on(Kk8101Actions.initKusurAnaListFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8101Actions.initHatListSuccess, (state, { data }) => ({
    ...state,
    utHatListLoaded: true,
    utHatList: data,
  })),
  on(Kk8101Actions.initHatListFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8101Actions.initKalitelerSuccess, (state, { data }) => ({
    ...state,
    kalitelerListLoaded: true,
    kalitelerList: data,
  })),
  on(Kk8101Actions.initKalitelerFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8101Actions.saveKkKusurAnaSuccess, (state, { record }) => ({
    ...state,
    kusurAnaList: state.kusurAnaList.concat(record),
    kusurAnaListLoaded: true,
  })),
  on(Kk8101Actions.saveKkKusurAnaFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8101Actions.saveKusurSuccess, (state, { kusur }) => ({
    ...state,
    kusurList: state.kusurList.concat(kusur.kkKusur),
    defaultKusur: kusur,
    kusurKtlgViewList: [],
    kusurKtlgViewListLoaded: true,
  })),
  on(Kk8101Actions.saveKusurFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(
    Kk8101Actions.getKusurSuccess,
    (state, { kusur, kusurKatalogViewList }) => ({
      ...state,
      defaultKusur: kusur,
      kusurKtlgViewList: kusurKatalogViewList,
      kusurKtlgViewListLoaded: true,
      newKatalogView: null,
    })
  ),
  on(Kk8101Actions.getKusurFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8101Actions.resetDefaultKusur, state => ({
    ...state,
    defaultKusur: undefined,
    kusurKtlgViewList: null,
    kusurKtlgViewListLoaded: false,
    newKatalogView: null,
  })),

  on(Kk8101Actions.addNewKatalogView, (state, { kusurKatalog }) => ({
    ...state,
    newKatalogView: kusurKatalog,
  })),
  on(Kk8101Actions.removeUnsavedKatalogView, state => ({
    ...state,
    newKatalogView: null,
  })),

  on(Kk8101Actions.saveKusurKatalogSuccess, (state, { kusurKatalog }) => ({
    ...state,
    kusurKtlgViewList: [kusurKatalog, ...state.kusurKtlgViewList],
    kusurKtlgViewListLoaded: true,
    katalogHatComboList: state.katalogHatComboList.filter(
      kod => kod !== kusurKatalog.kkKusurKtlgHat.hatKodu
    ),
  })),
  on(Kk8101Actions.saveKusurKatalogFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8101Actions.updateKusurKatalogSuccess, (state, { kusurKatalog }) => {
    const { kusurKtlgViewList } = state;
    const { kusurKodu, hatKodu } = kusurKatalog.kkKusurKtlgHat;
    const index = kusurKtlgViewList.findIndex(
      ({ kkKusurKtlgHat }) =>
        kkKusurKtlgHat.kusurKodu === kusurKodu &&
        kkKusurKtlgHat.hatKodu === hatKodu
    );

    return {
      ...state,
      kusurKtlgViewList: [
        ...kusurKtlgViewList.filter((_, i) => i < index),
        kusurKatalog,
        ...kusurKtlgViewList.filter((_, i) => i > index),
      ],
      kusurKtlgViewListLoaded: true,
    };
  }),
  on(Kk8101Actions.updateKusurKatalogFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(
    Kk8101Actions.getKatalogComboListSuccess,
    (state, { katalogHatComboList }) => ({
      ...state,
      katalogHatComboList,
      katalogHatComboListLoaded: true,
    })
  ),
  on(Kk8101Actions.getKatalogComboListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(Kk8101Actions.resetKatalogCombo, state => ({
    ...state,
    katalogHatComboList: null,
    katalogHatComboListLoaded: false,
  })),

  on(Kk8101Actions.initUrunListSuccess, (state, { urunList }) => ({
    ...state,
    ktUrunList: urunList,
    ktUrunListLoaded: true,
  })),
  on(Kk8101Actions.initUrunListFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8101Actions.resetKatalogGorselList, state => ({
    ...state,
    katalogGorselList: [],
    katalogGorselListLoaded: false,
    addKatalogGorselSuccess: false,
  })),
  on(Kk8101Actions.addKatalogGorsel, state => ({
    ...state,
    addKatalogGorselSuccess: false,
  })),
  on(
    Kk8101Actions.loadKatalogGorselListSuccess,
    (state, { katalogGorselList }) => ({
      ...state,
      katalogGorselList,
      katalogGorselListLoaded: true,
      addKatalogGorselSuccess: false,
    })
  ),
  on(Kk8101Actions.loadKatalogGorselListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(Kk8101Actions.addKatalogGorselSuccess, (state, { katalogGorselList }) => ({
    ...state,
    katalogGorselList,
    katalogGorselListLoaded: true,
    addKatalogGorselSuccess: true,
  })),
  on(Kk8101Actions.addKatalogGorselFailure, (state, { error }) => ({
    ...state,
    error,
    addKatalogGorselSuccess: false,
  })),
  on(
    Kk8101Actions.removeKatalogGorselSuccess,
    (state, { katalogGorselList }) => ({
      ...state,
      katalogGorselList,
      katalogGorselListLoaded: true,
      addKatalogGorselSuccess: false,
    })
  ),
  on(Kk8101Actions.removeKatalogGorselFailure, (state, { error }) => ({
    ...state,
    error,
    addKatalogGorselSuccess: false,
  })),
  on(Kk8101Actions.deleteKusurKatalogSuccess, (state, { index }) => ({
    ...state,
    kusurKtlgViewList: state.kusurKtlgViewList.filter((_, i) => i !== index),
  })),
  on(Kk8101Actions.deleteKusurKatalogFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kk8101Reducer(state, action);
}
