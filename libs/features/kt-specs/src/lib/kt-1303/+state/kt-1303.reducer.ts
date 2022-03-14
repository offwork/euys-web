import {
  Celik,
  ErrorModel,
  KtAt2SckHadIkmalSicakl,
  KtSp2SckHadIkmalSicaklik,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1303Actions from './kt-1303.actions';

export const KT_1303_FEATURE_KEY = 'kt1303';

export interface State {
  data: KtSp2SckHadIkmalSicaklik[];
  anatabloKomboList: KtAt2SckHadIkmalSicakl[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSp2SckHadIkmalSicaklik;
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
    sckHad2IkmalSicaklikKodu: null,
    sp2SckHadIkmalSicaklKodu: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1303Reducer = createReducer(
  initialState,
  on(Kt1303Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1303Actions.loadKt1303Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSp2SckHadIkmalSicaklikList.map(ikmalSicaklik => ({
      ...ikmalSicaklik,
      ktOIUrunListString: ikmalSicaklik.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: ikmalSicaklik.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAt2SckHadIkmalSicaklikList,
  })),
  on(Kt1303Actions.loadKt1303CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1303Actions.loadKt1303UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1303Actions.loadKt1303Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1303Actions.loadKt1303CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1303Actions.loadKt1303UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1303Actions.saveKt1303Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1303Actions.saveKt1303Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1303Reducer(state, action);
}
