import {
  Celik,
  ErrorModel,
  KtAtIiTenekeKalayKimyasal,
  KtSpIiTenekeKalayKimyasal,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1332Actions from './kt-1332.actions';

export const KT_1332_FEATURE_KEY = 'kt1332';

export interface State {
  data: KtSpIiTenekeKalayKimyasal[];
  anatabloKomboList: KtAtIiTenekeKalayKimyasal[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpIiTenekeKalayKimyasal;
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
    minOnKimyasalIslemKonsantr: null,
    maxOnKimyasalIslemKonsantr: null,
    minKimyasalIslemKonsantrasy: null,
    maxKimyasalIslemKonsantrasy: null,
    minBanyoSicakligi: null,
    maxBanyoSicakligi: null,
    iiTenekeKalayKimyasalText: null,
    durum: 'A',
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    kontrolAktifTaslak: null,
    iiTenekeKalayKimyasalKodu: null,
    spIiTenekeKalayKimyslKodu: null,
    maxGenislik: null,
    minGenislik: null,
    minKalinlik: null,
    maxKalinlik: null,
    codeAndText: null,
    celikKaliteleri: null,
    ktOIUrunList: null
  },
};

const kt1332Reducer = createReducer(
  initialState,
  on(Kt1332Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1332Actions.loadKt1332Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpIiTenekeKalayKimyasalList.map(kalayKimyasal => ({
      ...kalayKimyasal,
      ktOIUrunListString: kalayKimyasal.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: kalayKimyasal.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtIiTenekeKalayKimyasalList,
  })),
  on(Kt1332Actions.loadKt1332CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1332Actions.loadKt1332UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1332Actions.loadKt1332Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1332Actions.loadKt1332CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1332Actions.loadKt1332UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1332Actions.saveKt1332Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1332Actions.saveKt1332Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1332Reducer(state, action);
}
