import {
  Celik,
  ErrorModel,
  KtAtIiTenekeKalayErgitme,
  KtSpIiTenekeKalayErgitme,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1331Actions from './kt-1331.actions';

export const KT_1331_FEATURE_KEY = 'kt1331';

export interface State {
  data: KtSpIiTenekeKalayErgitme[];
  anatabloKomboList: KtAtIiTenekeKalayErgitme[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpIiTenekeKalayErgitme;
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
    minSicaklik: null,
    maxSicaklik: null,
    iiTenekeKalayErgitmeText: null,
    durum: 'A',
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    islemYapanMenu: null,
    islemTipiNo: null,
    etag: null,
    kontrolAktifTaslak: null,
    iiTenekeKalayErgitmeKodu: null,
    spIiTenekeKalayErgitmKodu: null,
    minKalinlik: null,
    maxKalinlik: null,
    minGenislik: null,
    maxGenislik: null,
    codeAndText: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1331Reducer = createReducer(
  initialState,
  on(Kt1331Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1331Actions.loadKt1331Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpIiTenekeKalayErgitmeList.map(kalayErgitme => ({
      ...kalayErgitme,
      ktOIUrunListString: kalayErgitme.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: kalayErgitme.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtIiTenekeKalayErgitmeList,
  })),
  on(Kt1331Actions.loadKt1331CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1331Actions.loadKt1331UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1331Actions.loadKt1331Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1331Actions.loadKt1331CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1331Actions.loadKt1331UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1331Actions.saveKt1331Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1331Actions.saveKt1331Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1331Reducer(state, action);
}
