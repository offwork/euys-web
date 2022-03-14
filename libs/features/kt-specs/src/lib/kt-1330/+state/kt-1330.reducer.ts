import {
  Celik,
  ErrorModel,
  KtAtIiTenekeAsitleme,
  KtSpIiTenekeAsitleme,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1330Actions from './kt-1330.actions';

export const KT_1330_FEATURE_KEY = 'kt1331';

export interface State {
  data: KtSpIiTenekeAsitleme[];
  anatabloKomboList: KtAtIiTenekeAsitleme[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpIiTenekeAsitleme;
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
  minAsitKonsantrasyon: null,
  maxAsitKonsantrasyon: null,
  minDemirKonsantrasyon: null,
  maxDemirKonsantrasyon: null,
  minSicaklik: null,
  maxSicaklik: null,
  uretimOzellikTipi: '003',
  iiTenekeAsitlemeText: null,
  durum: 'A',
  olusturanKisi: '108992',
  islemYapanKisi: '108992',
  islemTipiNo: null,
  islemYapanMenu: null,
  etag: null,
  kontrolAktifTaslak: null,
  iiTenekeAsitlemeKodu: null,
  spIiTenekeAsitlemeKodu: null,
  maxGenislik: null,
  minGenislik: null,
  minKalinlik: null,
  maxKalinlik: null,
  codeAndText: null,
  celikKaliteleri: null,
  ktOIUrunList: null
  },
};

const kt1331Reducer = createReducer(
  initialState,
  on(Kt1330Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1330Actions.loadKt1330Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpIiTenekeAsitlemeList.map(asitleme => ({
      ...asitleme,
      ktOIUrunListString: asitleme.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: asitleme.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtIiTenekeAsitlemeList,
  })),
  on(Kt1330Actions.loadKt1330CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1330Actions.loadKt1330UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1330Actions.loadKt1330Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1330Actions.loadKt1330CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1330Actions.loadKt1330UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1330Actions.saveKt1330Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1330Actions.saveKt1330Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1331Reducer(state, action);
}
