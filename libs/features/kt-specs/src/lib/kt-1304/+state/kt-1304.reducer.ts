import {
  Celik,
  ErrorModel,
  KtAt2SckHadSarilmaSicakl,
  KtSp2SckHadSarilmaSicakl,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1304Actions from './kt-1304.actions';

export const KT_1304_FEATURE_KEY = 'kt1304';

export interface State {
  data: KtSp2SckHadSarilmaSicakl[];
  anatabloKomboList: KtAt2SckHadSarilmaSicakl[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSp2SckHadSarilmaSicakl;
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
    sp2SckHadSarilmaScklKodu: null,
    sckHadSarilmaScklKodu: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1304Reducer = createReducer(
  initialState,
  on(Kt1304Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1304Actions.loadKt1304Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSp2SckHadSarilmaSicaklList.map(sarilmaSicaklik => ({
      ...sarilmaSicaklik,
      ktOIUrunListString: sarilmaSicaklik.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: sarilmaSicaklik.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAt2SckHadSarilmaSicaklList,
  })),
  on(Kt1304Actions.loadKt1304CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1304Actions.loadKt1304UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1304Actions.loadKt1304Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1304Actions.loadKt1304CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1304Actions.loadKt1304UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1304Actions.saveKt1304Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1304Actions.saveKt1304Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1304Reducer(state, action);
}
