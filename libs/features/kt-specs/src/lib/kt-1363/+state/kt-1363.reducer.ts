import {
  Celik,
  ErrorModel,
  KtAtAsitlemeTlv,
  KtSpAsitlemeTlv,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1363Actions from './kt-1363.actions';

export const KT_1363_FEATURE_KEY = 'kt1363';

export interface State {
  data: KtSpAsitlemeTlv[];
  anatabloKomboList: KtAtAsitlemeTlv[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpAsitlemeTlv;
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
    uretimOzellikTipi: '008',
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    durum: 'A',
    kontrolAktifTaslak: null,
    asitlemeTlvKodu: null,
    spAsitlemeTlvKodu: null,
    maxKalinlik: null,
    minKalinlik: null,
    minGenislik: null,
    maxGenislik: null,
    codeAndText: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};
const kt1363Reducer = createReducer(
  initialState,
  on(Kt1363Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1363Actions.loadKt1363Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpAsitlemeTlvList.map(asitlemeTlvlar => ({
      ...asitlemeTlvlar,
      ktOIUrunListString: asitlemeTlvlar.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: asitlemeTlvlar.celikKaliteleri.join(' '),
    })),

    anatabloKomboList: data.ktAtAsitlemeTlvList,
  })),
  on(Kt1363Actions.loadKt1363CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1363Actions.loadKt1363UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1363Actions.loadKt1363Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1363Actions.loadKt1363CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1363Actions.loadKt1363UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1363Actions.saveKt1363Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1363Actions.saveKt1363Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1363Reducer(state, action);
}
