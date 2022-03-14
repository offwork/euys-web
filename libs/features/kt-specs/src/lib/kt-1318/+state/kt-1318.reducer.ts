import {
  Celik,
  ErrorModel,
  KtCgl12HavaSogutma,
  KtSpCgl12HavaSogutmaAjc,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1318Actions from './kt-1318.actions';

export const KT_1318_FEATURE_KEY = 'kt1318';

export interface State {
  data: KtSpCgl12HavaSogutmaAjc[];
  anatabloKomboList: KtCgl12HavaSogutma[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpCgl12HavaSogutmaAjc;
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
    minGenislik: null,
    maxGenislik: null,
    spCgl12HavaSgtmaAjcKodu: null,
    cgl12HavaSogutmaAjcKodu: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1318Reducer = createReducer(
  initialState,
  on(Kt1318Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1318Actions.loadKt1318Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpCgl12HavaSogutmaAjcList.map(havaSogutmaAjc => ({
      ...havaSogutmaAjc,
      ktOIUrunListString: havaSogutmaAjc.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: havaSogutmaAjc.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtCgl12HavaSogutmaAjcList,
  })),
  on(Kt1318Actions.loadKt1318CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1318Actions.loadKt1318UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1318Actions.loadKt1318Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1318Actions.loadKt1318CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1318Actions.loadKt1318UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1318Actions.saveKt1318Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1318Actions.saveKt1318Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1318Reducer(state, action);
}
