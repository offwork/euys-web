import {
  Celik,
  ErrorModel,
  KtAtBobinBalikKuyrugu,
  KtSpBobinBalikKuyrugu,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1313Actions from './kt-1313.actions';

export const KT_1313_FEATURE_KEY = 'kt1313';

export interface State {
  data: KtSpBobinBalikKuyrugu[];
  anatabloKomboList: KtAtBobinBalikKuyrugu[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpBobinBalikKuyrugu;
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
    etag: null,
    uretimOzellikTipi: '003',
    islemTipiNo: null,
    durum: 'A',
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    islemYapanMenu: null,
    bobinBalikKuyruguAciklama: null,
    kontrolAktifTaslak: null,
    bobinBalikKuyruguKodu: null,
    spBobinBalikKuyruguKodu: null,
    maxGenislik: null,
    minGenislik: null,
    minKalinlik: null,
    maxKalinlik: null,
    codeAndText: null,
    celikKaliteleri: null,
    ktOIUrunList: null
  },
};

const kt1313Reducer = createReducer(
  initialState,
  on(Kt1313Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1313Actions.loadKt1313Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpBobinBalikKuyruguList.map(bobinBalikKuyrugu => ({
      ...bobinBalikKuyrugu,
      ktOIUrunListString: bobinBalikKuyrugu.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: bobinBalikKuyrugu.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtBobinBalikKuyruguList,
  })),
  on(Kt1313Actions.loadKt1313CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1313Actions.loadKt1313UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1313Actions.loadKt1313Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1313Actions.loadKt1313CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1313Actions.loadKt1313UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1313Actions.saveKt1313Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1313Actions.saveKt1313Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1313Reducer(state, action);
}
