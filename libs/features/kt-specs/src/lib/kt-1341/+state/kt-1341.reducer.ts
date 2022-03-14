import {
  Celik,
  ErrorModel,
  KtAtKromKaplamaTfsFlor,
  KtSpKromKaplamaTfsFlor,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1341Actions from './kt-1341.actions';

export const KT_1340_FEATURE_KEY = 'kt1341';

export interface State {
  data: KtSpKromKaplamaTfsFlor[];
  anatabloKomboList: KtAtKromKaplamaTfsFlor[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpKromKaplamaTfsFlor;
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
      olusturanKisi: '108992',
      islemYapanKisi: '108992',
      islemTipiNo: null,
      islemYapanMenu: null,
      etag: null,
      durum: 'A',
      minIKaplamaFlorKonsantrasy: null,
      maxIKaplamaFlorKonsantrasy: null,
      minIiKaplamaFlorKonsantras: null,
      maxIiKaplamaFlorKonsantras: null,
      kromKaplamaTfsFlorText: null,
      kontrolAktifTaslak: null,
      kromKaplamaTfsFlorKodu: null,
      spKromKaplamaTfsFlorKodu: null,
      maxGenislik: null,
      minGenislik: null,
      minKalinlik: null,
      maxKalinlik: null,
      codeAndText: null,
      celikKaliteleri: null,
      ktOIUrunList: null
  },
};

const kt1341Reducer = createReducer(
  initialState,
  on(Kt1341Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1341Actions.loadKt1341Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpKromKaplamaTfsFlorList.map(tfsFlor => ({
      ...tfsFlor,
      ktOIUrunListString: tfsFlor.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: tfsFlor.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtKromKaplamaTfsFlorList,
  })),
  on(Kt1341Actions.loadKt1341CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1341Actions.loadKt1341UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1341Actions.loadKt1341Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1341Actions.loadKt1341CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1341Actions.loadKt1341UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1341Actions.saveKt1341Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1341Actions.saveKt1341Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1341Reducer(state, action);
}
