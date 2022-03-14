import {
  Celik,
  ErrorModel,
  KtCgl12Tavlama2,
  KtSpCgl12Tavlama2,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1320Actions from './kt-1320.actions';

export const KT_1320_FEATURE_KEY = 'kt1320';

export interface State {
  data: KtSpCgl12Tavlama2[];
  anatabloKomboList: KtCgl12Tavlama2[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpCgl12Tavlama2;
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
    durum: 'A',
    etag: null,
    hedefRcsSicaklik: null,
    hedefScsSicaklik: null,
    id: null,
    islemTarihi: null,
    islemTipiNo: null,
    islemYapanKisi: '108992',
    islemYapanMenu: null,
    maxRcsHizi: null,
    maxRcsSicaklik: null,
    maxScsHizi: null,
    maxScsSicaklik: null,
    minRcsHizi: null,
    minRcsSicaklik: null,
    minScsHizi: null,
    minScsSicaklik: null,
    olusturanKisi: '108992',
    olusturmaTarihi: null,
    uretimOzellikTipi: '003',
    kontrolAktifTaslak: null,
    cgl12Tavlama2Text: null,
    cgl12Tavlama2Kodu: null,
    spCgl12Tavlama2Kodu: null,
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
  on(Kt1320Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1320Actions.loadKt1320Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpCgl12Tavlama2List.map(cglTavlama => ({
      ...cglTavlama,
      ktOIUrunListString: cglTavlama.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: cglTavlama.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtCgl12Tavlama2List,
  })),
  on(Kt1320Actions.loadKt1320CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1320Actions.loadKt1320UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1320Actions.loadKt1320Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1320Actions.loadKt1320CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1320Actions.loadKt1320UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1320Actions.saveKt1320Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1320Actions.saveKt1320Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1320Reducer(state, action);
}
