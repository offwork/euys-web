import {
  Celik,
  ErrorModel,
  KtAtAlkaliTemizleme,
  KtSpAlkaliTemizleme,
  Urun,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1306Actions from './kt-1306.actions';

export const KT_1306_FEATURE_KEY = 'kt1306';

export interface State {
  data: KtSpAlkaliTemizleme[];
  anatabloKomboList: KtAtAlkaliTemizleme[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpAlkaliTemizleme;
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
    minOnBanyoSicaklik: null,
    maxOnBanyoSicaklik: null,
    minOnBanyoKonsantrasyon: null,
    maxOnBanyoKonsantrasyon: null,
    hedefAnaBanyoSicaklik: null,
    minAnaBanyoSicaklik: null,
    maxAnaBanyoSicaklik: null,
    hedefAnaBanyoKonsantrasyon: null,
    minAnaBanyoKonsantrasyon: null,
    maxAnaBanyoKonsantrasyon: null,
    uretimOzellikTipi: null,
    alkaliTemizlemeText: null,
    durum: 'A',
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    islemTipiNo: null,
    islemYapanMenu: '003',
    etag: null,
    kontrolAktifTaslak: null,
    alkaliTemizlemeKodu: null,
    spAlkaliTemizlemeKodu: null,
    minKalinlik: null,
    maxKalinlik: null,
    codeAndText: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1306Reducer = createReducer(
  initialState,
  on(Kt1306Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1306Actions.loadKt1306Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpAlkaliTemizlemeList.map(alkaliTemizleme => ({
      ...alkaliTemizleme,
      ktOIUrunListString: alkaliTemizleme.ktOIUrunList
        .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
        .join(' '),
      celikListString: alkaliTemizleme.celikKaliteleri.join(' '),
    })),
    anatabloKomboList: data.ktAtAlkaliTemizlemeList,
  })),
  on(Kt1306Actions.loadKt1306CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1306Actions.loadKt1306UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1306Actions.loadKt1306Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1306Actions.loadKt1306CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1306Actions.loadKt1306UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1306Actions.saveKt1306Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1306Actions.saveKt1306Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1306Reducer(state, action);
}
