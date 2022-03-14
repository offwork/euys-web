import {
  Celik,
  ErrorModel,
  Urun,
  KtSpEnineKalinlikVeIkiKenarFarklariSpec,
  KtAtEnineKalinlikVeIkiKenarFarklari,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1326Actions from './kt-1326.actions';

export const KT_1326_FEATURE_KEY = 'kt1326';

export interface State {
  data: KtSpEnineKalinlikVeIkiKenarFarklariSpec[];
  anatabloKomboList: KtAtEnineKalinlikVeIkiKenarFarklari[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpEnineKalinlikVeIkiKenarFarklariSpec;
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
    enineKalIkiKenarFarkKodu: null,
    spEnineKalinIkiKenarFarkKodu: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1326Reducer = createReducer(
  initialState,
  on(Kt1326Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1326Actions.loadKt1326Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpEnineKalIkiKenarFarkList.map(
      ktSpEnineKalinlikVeIkiKenarFarklariSpec => ({
        ...ktSpEnineKalinlikVeIkiKenarFarklariSpec,
        ktOIUrunListString: ktSpEnineKalinlikVeIkiKenarFarklariSpec.ktOIUrunList
          .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
          .join(' '),
        celikListString:
          ktSpEnineKalinlikVeIkiKenarFarklariSpec.celikKaliteleri.join(' '),
      })
    ),
    anatabloKomboList: data.ktAtEnineKalinIkiKenarFarkList,
  })),
  on(Kt1326Actions.loadKt1326CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1326Actions.loadKt1326UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1326Actions.loadKt1326Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1326Actions.loadKt1326CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1326Actions.loadKt1326UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1326Actions.saveKt1326Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1326Actions.saveKt1326Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1326Reducer(state, action);
}
