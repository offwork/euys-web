import {
  Celik,
  ErrorModel,
  KtAtBobinDilUcu,
  KtSpBobinDilUcu,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1314Actions from './kt-1314.actions';

export const KT_1314_FEATURE_KEY = 'kt1314';

export interface State {
  data: KtSpBobinDilUcu[];
  anatabloKomboList: KtAtBobinDilUcu[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpBobinDilUcu;
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
    bobinDilUcuAciklama: null,
    kontrolAktifTaslak: null,
    bobinDilUcuKodu: null,
    spBobinDilUcuKodu: null,
    maxGenislik: null,
    minGenislik: null,
    minKalinlik: null,
    maxKalinlik: null,
    codeAndText: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1314Reducer = createReducer(
  initialState,
  on(Kt1314Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1314Actions.loadKt1314Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpBobinDilUcuList.map(bobinDilUcu => ({
      ...bobinDilUcu,
      ktOIUrunListString: bobinDilUcu.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: bobinDilUcu.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtBobinDilUcuList,
  })),
  on(Kt1314Actions.loadKt1314CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1314Actions.loadKt1314UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1314Actions.loadKt1314Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1314Actions.loadKt1314CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1314Actions.loadKt1314UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1314Actions.saveKt1314Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1314Actions.saveKt1314Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1314Reducer(state, action);
}
