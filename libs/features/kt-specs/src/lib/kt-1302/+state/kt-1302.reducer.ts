import {
  Celik,
  ErrorModel,
  KtAt1SckHadSarilmaSicakl,
  KtSp1SckHadSarilmaSicakl,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1302Actions from './kt-1302.actions';

export const KT_1302_FEATURE_KEY = 'kt1302';

export interface State {
  data: KtSp1SckHadSarilmaSicakl[];
  anatabloKomboList: KtAt1SckHadSarilmaSicakl[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSp1SckHadSarilmaSicakl;
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
    sp1SckHadSarilmaScklKodu: null,
    sckHadSarilmaScklKodu: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1302Reducer = createReducer(
  initialState,
  on(Kt1302Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1302Actions.loadKt1302Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSp1SckHadSarilmaSicaklList.map(ikmalSicaklik => ({
      ...ikmalSicaklik,
      ktOIUrunListString: ikmalSicaklik.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: ikmalSicaklik.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAt1SckHadSarilmaSicaklList,
  })),
  on(Kt1302Actions.loadKt1302CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1302Actions.loadKt1302UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1302Actions.loadKt1302Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1302Actions.loadKt1302CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1302Actions.loadKt1302UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1302Actions.saveKt1302Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1302Actions.saveKt1302Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1302Reducer(state, action);
}
