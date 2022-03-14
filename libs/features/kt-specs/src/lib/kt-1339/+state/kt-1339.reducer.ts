import {
  Celik,
  ErrorModel,
  KtSpKromKaplamaTfsCro3,
  Urun,
  KtAtKromKaplamaTfsCro3,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1339Actions from './kt-1339.actions';

export const KT_1339_FEATURE_KEY = 'kt1339';

export interface State {
  data: KtSpKromKaplamaTfsCro3[];
  anatabloKomboList: KtAtKromKaplamaTfsCro3[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpKromKaplamaTfsCro3;
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
    maxGenislik: null,
    minGenislik: null,
    kromKaplamaTfsCro3Kodu: null,
    spKromKaplamaTfsCro3Kodu: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1339Reducer = createReducer(
  initialState,
  on(Kt1339Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1339Actions.loadKt1339Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpKromKaplamaTfsCro3List.map(ktSpKromKaplamaTfsCro3 => ({
      ...ktSpKromKaplamaTfsCro3,
      ktOIUrunListString: ktSpKromKaplamaTfsCro3.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: ktSpKromKaplamaTfsCro3.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtKromKaplamaTfsCro3List,
  })),
  on(Kt1339Actions.loadKt1339CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1339Actions.loadKt1339UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1339Actions.loadKt1339Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1339Actions.loadKt1339CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1339Actions.loadKt1339UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1339Actions.saveKt1339Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1339Actions.saveKt1339Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1339Reducer(state, action);
}
