import {
  Celik,
  ErrorModel,
  KtSpDualFazliKaliteSckHaddeSpec,
  Urun,
  KtAtDualBazliKaliteSckHadde,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1325Actions from './kt-1325.actions';

export const KT_1325_FEATURE_KEY = 'kt1325';

export interface State {
  data: KtSpDualFazliKaliteSckHaddeSpec[];
  anatabloKomboList: KtAtDualBazliKaliteSckHadde[];
  urunler: Urun[];
  celikler: Celik[];
  defaultRow: KtSpDualFazliKaliteSckHaddeSpec;
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
    dualFazliKaliteSckHadKodu: null,
    spDualFazliKaliteSckHadKodu: null,
    celikKaliteleri: null,
    ktOIUrunList: null,
  },
};

const kt1325Reducer = createReducer(
  initialState,
  on(Kt1325Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1325Actions.loadKt1325Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpDualFazliKaliteSckHaddeList.map(
      ktSpDualFazliKaliteSckHaddeSpec => ({
        ...ktSpDualFazliKaliteSckHaddeSpec,
        ktOIUrunListString: ktSpDualFazliKaliteSckHaddeSpec.ktOIUrunList
          .map(({ urunKodu, urunRumuzu }) => `${urunKodu} ${urunRumuzu}`)
          .join(' '),
        celikListString:
          ktSpDualFazliKaliteSckHaddeSpec.celikKaliteleri.join(' '),
      })
    ),
    anatabloKomboList: data.ktAtDualBazliKaliteSckHaddeList,
  })),
  on(Kt1325Actions.loadKt1325CeliklerSuccess, (state, { data }) => ({
    ...state,
    loadedCelikler: true,
    celikler: data,
  })),
  on(Kt1325Actions.loadKt1325UrunlerSuccess, (state, { data }) => ({
    ...state,
    loadedUrunler: true,
    urunler: data,
  })),
  on(Kt1325Actions.loadKt1325Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1325Actions.loadKt1325CeliklerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedCelikler: false,
  })),
  on(Kt1325Actions.loadKt1325UrunlerFailure, (state, { error }) => ({
    ...state,
    error,
    loadedUrunler: false,
  })),
  on(Kt1325Actions.saveKt1325Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1325Actions.saveKt1325Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1325Reducer(state, action);
}
