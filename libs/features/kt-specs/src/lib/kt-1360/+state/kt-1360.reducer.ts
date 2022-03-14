import {
  Celik,
  ErrorModel,
  KtAtYansitmaTesti,
  KtSpYansitmaTesti,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1360Actions from './kt-1360.actions';

export const KT_1360_FEATURE_KEY = 'kt1360';

export interface State {
  data: KtSpYansitmaTesti[];
  anatabloKomboList: KtAtYansitmaTesti[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpYansitmaTesti;
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
    uretimOzellikTipi: '061',
    olusturanKisi: '100396',
    islemYapanKisi: '108396',
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    durum: 'A',
    kontrolAktifTaslak: null,
    yansitmaTestiKodu: null,
    spYansitmaTestiKodu: null,
    maxKalinlik: null,
    minKalinlik: null,
    minGenislik: null,
    maxGenislik: null,
    codeAndText: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};
const kt1360Reducer = createReducer(
  initialState,
  on(Kt1360Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1360Actions.loadKt1360Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpYansitmaTestiList.map(yansitmaTestler => ({
      ...yansitmaTestler,
      ktOIUrunListString: yansitmaTestler.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: yansitmaTestler.celikKaliteleri.join(' '),
    })),

    anatabloKomboList: data.ktAtYansitmaTestiList,
  })),
  on(Kt1360Actions.loadKt1360CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1360Actions.loadKt1360UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1360Actions.loadKt1360Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1360Actions.loadKt1360CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1360Actions.loadKt1360UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1360Actions.saveKt1360Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1360Actions.saveKt1360Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1360Reducer(state, action);
}
