import {
  Celik,
  ErrorModel,
  KtAtBafHattiTavlama,
  KtSpBafHattiTavlama,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1312Actions from './kt-1312.actions';

export const KT_1312_FEATURE_KEY = 'kt1312';

export interface State {
  data: KtSpBafHattiTavlama[];
  anatabloKomboList: KtAtBafHattiTavlama[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpBafHattiTavlama;
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
    bafTavlamaKodu: null,
    bafTavlamaAciklama: null,
    bafHattiTavlamaText: null,
    uretimOzellikTipi: '003',
    durum: 'A',
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    kontrolAktifTaslak: null,
    bafHattiTavlamaKodu: null,
    spBafHattiTavlamaKodu: null,
    maxGenislik: null,
    minGenislik: null,
    minKalinlik: null,
    maxKalinlik: null,
    codeAndText: null,
    celikKaliteleri: null,
    ktOIUrunList: null
   
  },
};

const kt1312Reducer = createReducer(
  initialState,
  on(Kt1312Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1312Actions.loadKt1312Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpBafHattiTavlamaList.map(bafHattiTavlama => ({
      ...bafHattiTavlama,
      ktOIUrunListString: bafHattiTavlama.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: bafHattiTavlama.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtBafHattiTavlamaList,
  })),
  on(Kt1312Actions.loadKt1312CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1312Actions.loadKt1312UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1312Actions.loadKt1312Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1312Actions.loadKt1312CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1312Actions.loadKt1312UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1312Actions.saveKt1312Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1312Actions.saveKt1312Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1312Reducer(state, action);
}
