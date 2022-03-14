import {
  Celik,
  ErrorModel,
  KtAtBobHazTempYuzdeUzama,
  KtSpBobHazTempYuzdeUzama,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1315Actions from './kt-1315.actions';

export const KT_1315_FEATURE_KEY = 'kt1315';

export interface State {
  data: KtSpBobHazTempYuzdeUzama[];
  anatabloKomboList: KtAtBobHazTempYuzdeUzama[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpBobHazTempYuzdeUzama;
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
    minGenislik: null,
    maxGenislik: null,
    spBobHazTempYuzdeUzaKodu: null,
    bobHazTempYuzdeUzamaKodu: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1315Reducer = createReducer(
  initialState,
  on(Kt1315Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1315Actions.loadKt1315Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpBobHazTempYuzdeUzamaList.map(tempYuzdeUzama => ({
      ...tempYuzdeUzama,
      ktOIUrunListString: tempYuzdeUzama.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: tempYuzdeUzama.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtBobHazTempYuzdeUzamaList,
  })),
  on(Kt1315Actions.loadKt1315CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1315Actions.loadKt1315UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1315Actions.loadKt1315Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1315Actions.loadKt1315CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1315Actions.loadKt1315UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1315Actions.saveKt1315Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1315Actions.saveKt1315Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1315Reducer(state, action);
}
