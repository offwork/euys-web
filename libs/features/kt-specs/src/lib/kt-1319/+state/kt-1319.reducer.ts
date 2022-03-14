import {
  Celik,
  ErrorModel,
  KtCgl12Tavlama1,
  KtSpCgl12Tavlama1,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1319Actions from './kt-1319.actions';

export const KT_1319_FEATURE_KEY = 'kt1319';

export interface State {
  data: KtSpCgl12Tavlama1[];
  anatabloKomboList: KtCgl12Tavlama1[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpCgl12Tavlama1;
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
    cgl12Tavlama1Text: null,
    cgl12TavlamaKodu: null,
    durum: 'A',
    etag: null,
    hedefHsSicaklik: null,
    hedefSsSicaklik: null,
    hedefSsSuresi: null,
    id: null,
    islemTarihi: null,
    islemTipiNo: null,
    islemYapanKisi: '108992',
    islemYapanMenu: null,
    maxHsIsitmaHizi: null,
    maxHsSicaklik: null,
    maxSsSicaklik: null,
    maxSsSuresi: null,
    minHsIsitmaHizi: null,
    minHsSicaklik: null,
    minSsSicaklik: null,
    minSsSuresi: null,
    olusturanKisi: '108992',
    olusturmaTarihi: null,
    uretimOzellikTipi: '003',
    kontrolAktifTaslak: null,
    cgl12Tavlama1Kodu: null,
    spCgl12Tavlama1Kodu: null,
    maxGenislik: null,
    minGenislik: null,
    minKalinlik: null,
    maxKalinlik: null,
    codeAndText: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1319Reducer = createReducer(
  initialState,
  on(Kt1319Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1319Actions.loadKt1319Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpCgl12Tavlama1List.map(tfsFlor => ({
      ...tfsFlor,
      ktOIUrunListString: tfsFlor.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: tfsFlor.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtCgl12Tavlama1List,
  })),
  on(Kt1319Actions.loadKt1319CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1319Actions.loadKt1319UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1319Actions.loadKt1319Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1319Actions.loadKt1319CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1319Actions.loadKt1319UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1319Actions.saveKt1319Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1319Actions.saveKt1319Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1319Reducer(state, action);
}
