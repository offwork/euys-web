import {
  Celik,
  ErrorModel,
  KtSpIiTenekeKalayKaplama,
  Urun,
  KtAtIiTenekeKalayKaplama,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1333Actions from './kt-1333.actions';

export const KT_1333_FEATURE_KEY = 'kt1333';

export interface State {
  data: KtSpIiTenekeKalayKaplama[];
  anatabloKomboList: KtAtIiTenekeKalayKaplama[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpIiTenekeKalayKaplama;
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
    durum: 'A',
    etag: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    uretimOzellikTipi: '003',
    codeAndText: null,
    kontrolAktifTaslak: null,
    maxKalinlik: null,
    minKalinlik: null,
    maxGenislik: null,
    minGenislik: null,
    iiTenekeKalayKaplamaKodu: null,
    spIiTenekeKalayKaplamaKodu: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1333Reducer = createReducer(
  initialState,
  on(Kt1333Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1333Actions.loadKt1333Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpIiTenekeKalayKaplamaList.map(ktSpIiTenekeKalayKaplama => ({
      ...ktSpIiTenekeKalayKaplama,
      ktOIUrunListString: ktSpIiTenekeKalayKaplama.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: ktSpIiTenekeKalayKaplama.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtIiTenekeKalayKaplamaList,
  })),
  on(Kt1333Actions.loadKt1333CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1333Actions.loadKt1333UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1333Actions.loadKt1333Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1333Actions.loadKt1333CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1333Actions.loadKt1333UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1333Actions.saveKt1333Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1333Actions.saveKt1333Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1333Reducer(state, action);
}
