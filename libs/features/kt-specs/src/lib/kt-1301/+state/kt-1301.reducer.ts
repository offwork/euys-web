import {
  Celik,
  ErrorModel,
  KtAt1SckHadIkmalSicakl,
  KtSp1SckHadIkmalSicaklik,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1301Actions from './kt-1301.actions';

export const KT_1301_FEATURE_KEY = 'kt1301';

export interface State {
  data: KtSp1SckHadIkmalSicaklik[];
  anatabloKomboList: KtAt1SckHadIkmalSicakl[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSp1SckHadIkmalSicaklik;
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
    olusturanKisi: '100396',
    islemYapanKisi: '100396',
    uretimOzellikTipi: '069',
    codeAndText: null,
    kontrolAktifTaslak: null,
    maxKalinlik: null,
    minKalinlik: null,
    maxGenislik: null,
    minGenislik: null,
    sp1SckHadIkmalSicaklKodu: null,
    sckHad1IkmalSicaklikKodu: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1301Reducer = createReducer(
  initialState,

  on(Kt1301Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),

  on(Kt1301Actions.loadKt1301Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSp1SckHadIkmalSicaklikList.map(ikmalSicaklik => ({
      ...ikmalSicaklik,
      ktOIUrunListString: ikmalSicaklik.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: ikmalSicaklik.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAt1SckHadIkmalSicaklikList,
  })),

  on(Kt1301Actions.loadKt1301CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),

  on(Kt1301Actions.loadKt1301UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),

  on(Kt1301Actions.loadKt1301Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),

  on(Kt1301Actions.loadKt1301CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),

  on(Kt1301Actions.loadKt1301UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1301Actions.saveKt1301Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1301Actions.saveKt1301Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1301Reducer(state, action);
}
