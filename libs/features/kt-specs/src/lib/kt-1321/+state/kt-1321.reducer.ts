import {
  Celik,
  ErrorModel,
  KtAtCgl12Temizleme,
  KtSpCgl12Temizleme,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1321Actions from './kt-1321.actions';

export const KT_1321_FEATURE_KEY = 'kt1320';

export interface State {
  data: KtSpCgl12Temizleme[];
  anatabloKomboList: KtAtCgl12Temizleme[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpCgl12Temizleme;
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
    uretimOzellikTipi: '003',
    hedefAlkaliTemizlemeSicaklg: null,
    minAlkaliTemizlemeSicakligi: null,
    maxAlkaliTemizlemeSicakligi: null,
    minAlkaliTemizlemeKonsantrs: null,
    maxAlkaliTemizlemeKonsantrs: null,
    hdfElektrolitikTemizlSicakl: null,
    minElektrolitikTemizlSicakl: null,
    maxElektrolitikTemizlSicakl: null,
    minElektrolitikTemizlKonsan: null,
    maxElektrolitikTemizlKonsan: null,
    cgl12TemizlemeText: null,
    durum: 'A',
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    kontrolAktifTaslak: null,
    cgl12TemizlemeKodu: null,
    SpCgl12TemizlemeKodu: null,
    maxGenislik: null,
    minGenislik: null,
    minKalinlik: null,
    maxKalinlik: null,
    codeAndText: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1320Reducer = createReducer(
  initialState,
  on(Kt1321Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1321Actions.loadKt1321Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpCgl12TemizlemeList.map(cglTemizleme => ({
      ...cglTemizleme,
      ktOIUrunListString: cglTemizleme.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: cglTemizleme.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtCgl12TemizlemeList,
  })),
  on(Kt1321Actions.loadKt1321CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1321Actions.loadKt1321UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1321Actions.loadKt1321Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1321Actions.loadKt1321CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1321Actions.loadKt1321UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1321Actions.saveKt1321Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1321Actions.saveKt1321Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1320Reducer(state, action);
}
