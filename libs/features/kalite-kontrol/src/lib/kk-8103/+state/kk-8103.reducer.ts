import {
  Urun,
  Celik,
  GnUretimMusteriGenelModel,
  KkOperatorBilgilendirme,
  ErrorModel,
  KkOperatorBilgiGörseller,
} from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as Kk8103Actions from './kk-8103.actions';

export const KK_8103_FEATURE_KEY = 'kk8103';

export interface State {
  oprBilgiKayit: KkOperatorBilgilendirme;
  oprBilgiKayitLoaded: boolean;
  musteriList: GnUretimMusteriGenelModel[];
  musteriListLoaded: boolean;
  error?: ErrorModel;
  urunList: Urun[];
  urunListLoaded: boolean;
  kaliteList: Celik[];
  kaliteListLoaded: boolean;
  oprBilgilendirmeGorselList: KkOperatorBilgiGörseller[];
  oprBilgilendirmeGorselListLoaded: boolean;
  addKatalogGorselSuccess: boolean;
}

export const initialState: State = {
  oprBilgiKayit: null,
  oprBilgiKayitLoaded: false,
  musteriList: [],
  musteriListLoaded: false,
  urunList: [],
  urunListLoaded: false,
  kaliteList: [],
  kaliteListLoaded: false,
  oprBilgilendirmeGorselList: [],
  oprBilgilendirmeGorselListLoaded: false,
  addKatalogGorselSuccess: false,
};

const kk8103Reducer = createReducer(
  initialState,

  on(Kk8103Actions.initMusteriListSuccess, (state, { data }) => ({
    ...state,
    musteriListLoaded: true,
    musteriList: data,
  })),
  on(Kk8103Actions.initMusteriListFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8103Actions.initUrunListSuccess, (state, { data }) => ({
    ...state,
    urunListLoaded: true,
    urunList: data,
  })),
  on(Kk8103Actions.initUrunListFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8103Actions.initKaliteListSuccess, (state, { data }) => ({
    ...state,
    kaliteListLoaded: true,
    kaliteList: data,
  })),
  on(Kk8103Actions.initKaliteListFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8103Actions.saveOprBilgiSuccess, (state, { oprBilgiKayit }) => ({
    ...state,
    //oprBilgiKayit: state.oprBilgiKayit.concat(oprBilgiKayit),
    oprBilgiKayit: oprBilgiKayit,
    oprBilgiKayitLoaded: true,
  })),
  on(Kk8103Actions.saveOprBilgiFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(Kk8103Actions.resetOprBilgiGorselList, state => ({
    ...state,
    oprBilgilendirmeGorselList: [],
    oprBilgilendirmeGorselListLoaded: false,
  })),
  on(
    Kk8103Actions.getOprBilgilendirmeGorselListSuccess,
    (state, { operatorGorselList }) => ({
      ...state,
      oprBilgilendirmeGorselList: operatorGorselList,
      oprBilgilendirmeGorselListLoaded: true,
    })
  ),
  on(
    Kk8103Actions.getOprBilgilendirmeGorselListFailure,
    (state, { error }) => ({
      ...state,
      error,
    })
  ),
  on(
    Kk8103Actions.addOprBilgilendirmeGorselSuccess,
    (state, { operatorGorselList }) => ({
      ...state,
      oprBilgilendirmeGorselList: operatorGorselList,
      oprBilgilendirmeGorselListLoaded: true,
    })
  ),
  on(Kk8103Actions.addOprBilgilendirmeGorselFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    Kk8103Actions.removeOprBilgilendirmeGorselSuccess,
    (state, { operatorGorselList }) => ({
      ...state,
      oprBilgilendirmeGorselList: operatorGorselList,
      oprBilgilendirmeGorselListLoaded: true,
    })
  ),
  on(Kk8103Actions.removeOprBilgilendirmeGorselFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kk8103Reducer(state, action);
}
