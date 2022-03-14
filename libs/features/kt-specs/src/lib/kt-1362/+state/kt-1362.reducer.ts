import {
  Celik,
  ErrorModel,
  KtAtAsitlemeTank,
  KtSpAsitlemeTank,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1362Actions from './kt-1362.actions';

export const KT_1362_FEATURE_KEY = 'kt1362';

export interface State {
  data: KtSpAsitlemeTank[];
  anatabloKomboList: KtAtAsitlemeTank[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpAsitlemeTank;
  loaded: boolean;
  loadedUrunler: boolean;
  loadedCelikler: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  anatabloKomboList: [],
  urunler: [],
  celikler: [],
  loaded: false,
  loadedUrunler: false,
  loadedCelikler: false,
  defaultRow: {
    id: null,
    uretimOzellikTipi: '008',
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    durum: 'A',
    kontrolAktifTaslak: null,
    asitlemeTankKodu: null,
    spAsitlemeTankKodu: null,
    maxKalinlik: null,
    minKalinlik: null,
    minGenislik: null,
    maxGenislik: null,
    codeAndText: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};
const kt1362Reducer = createReducer(
  initialState,
  on(Kt1362Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1362Actions.loadKt1362Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpAsitlemeTankList.map(asitlemeTanklar => ({
      ...asitlemeTanklar,
      ktOIUrunListString: asitlemeTanklar.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: asitlemeTanklar.celikKaliteleri.join(' '),
    })),

    anatabloKomboList: data.ktAtAsitlemeTankList,
  })),
  on(Kt1362Actions.loadKt1362CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1362Actions.loadKt1362UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1362Actions.loadKt1362Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1362Actions.loadKt1362CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1362Actions.loadKt1362UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1362Actions.saveKt1362Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1362Actions.saveKt1362Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1362Reducer(state, action);
}
