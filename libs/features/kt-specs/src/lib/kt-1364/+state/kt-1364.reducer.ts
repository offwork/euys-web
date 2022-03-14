import {
  Celik,
  ErrorModel,
  KtAtDurulama,
  KtSpDurulama,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1364Actions from './kt-1364.actions';

export const KT_1364_FEATURE_KEY = 'kt1364';

export interface State {
  data: KtSpDurulama[];
  anatabloKomboList: KtAtDurulama[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpDurulama;
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
    durulamaKodu: null,
    spDurulamaKodu: null,
    maxKalinlik: null,
    minKalinlik: null,
    minGenislik: null,
    maxGenislik: null,
    codeAndText: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};
const kt1364Reducer = createReducer(
  initialState,
  on(Kt1364Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1364Actions.loadKt1364Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpDurulamaList.map(Durulamalar => ({
      ...Durulamalar,
      ktOIUrunListString: Durulamalar.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: Durulamalar.celikKaliteleri.join(' '),
    })),

    anatabloKomboList: data.ktAtDurulamaList,
  })),
  on(Kt1364Actions.loadKt1364CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1364Actions.loadKt1364UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1364Actions.loadKt1364Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1364Actions.loadKt1364CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1364Actions.loadKt1364UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1364Actions.saveKt1364Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1364Actions.saveKt1364Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1364Reducer(state, action);
}
