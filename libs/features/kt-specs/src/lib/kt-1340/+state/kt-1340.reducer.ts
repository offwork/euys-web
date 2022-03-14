import {
  Celik,
  ErrorModel,
  KtAtKromKaplamaTfsDragout,
  KtSpKromKaplamaTfsDragout,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1340Actions from './kt-1340.actions';

export const KT_1340_FEATURE_KEY = 'kt1340';

export interface State {
  data: KtSpKromKaplamaTfsDragout[];
  anatabloKomboList: KtAtKromKaplamaTfsDragout[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpKromKaplamaTfsDragout;
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
    minIKaplamaDragOutKonsant: null,
    maxIKaplamaDragOutKonsant: null,
    minIKaplamaDragOutSicaklk: null,
    maxIKaplamaDragOutSicaklk: null,
    minIiKaplamaDragOutKonsan: null,
    maxIiKaplamaDragOutKonsan: null,
    minIiKaplamaDragOutSicakl: null,
    maxIiKaplamaDragOutSicakl: null,
    kromKaplamaTfsDragOutText: null,
    durum: 'A',
    olusturanKisi: '108992',
    islemYapanMenu: null,
    islemYapanKisi: '108992',
    islemTipiNo: null,
    etag: null,
    kontrolAktifTaslak: null,
    kromKaplamaTfsDragOutKodu: null,
    spKromKaplamaTfsDragOutKodu: null,
    maxGenislik: null,
    minGenislik: null,
    minKalinlik: null,
    maxKalinlik: null,
    codeAndText: null,
    celikKaliteleri: null,
    ktOIUrunList: null
  },
};

const kt1340Reducer = createReducer(
  initialState,
  on(Kt1340Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1340Actions.loadKt1340Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpKromKaplamaTfsDragoutList.map(tfsKaplama => ({
      ...tfsKaplama,
      ktOIUrunListString: tfsKaplama.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: tfsKaplama.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtKromKaplamaTfsDragoutList,
  })),
  on(Kt1340Actions.loadKt1340CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1340Actions.loadKt1340UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1340Actions.loadKt1340Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1340Actions.loadKt1340CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1340Actions.loadKt1340UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1340Actions.saveKt1340Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1340Actions.saveKt1340Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1340Reducer(state, action);
}
