import {
  ErrorModel,
  Hat,
  KtAnatabloMarkalama,
  KtAtMarkalama,
  KtSpMarkalama,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1344Actions from './kt-1344.actions';

export const KT_1344_FEATURE_KEY = 'kt1344';

export interface State {
  data: KtSpMarkalama[];
  anatabloKomboList: KtAtMarkalama[];
  oiAnatabloKomboList: KtAnatabloMarkalama[];
  hatKomboList: Hat[];
  defaultRow: KtSpMarkalama;
  loaded: boolean;

  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  anatabloKomboList: [],
  oiAnatabloKomboList: [],
  hatKomboList: [],
  loaded: false,
  defaultRow: {
    id: null,
    uretimOzellikTipi: '043',
    olusturanKisi: '100396',
    islemYapanKisi: '100396',
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    durum: 'A',
    kontrolAktifTaslak: null,
    hatKodu: '611',
    spMarkalamaKodu: null,
    markalamaKodu: null,
    oiMarkalamaAnaTabloKodu: null,
    codeAndText: null,
    idAndAciklama: null,
  },
};

const kt1344Reducer = createReducer(
  initialState,
  on(Kt1344Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1344Actions.loadKt1344Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpMarkalamaList,
    anatabloKomboList: data.ktAtMarkalamaList,
    oiAnatabloKomboList: data.ktAnatabloMarkalamaList,
  })),
  on(Kt1344Actions.loadKt1344Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1344Actions.loadKt1344HatlarSuccess, (state, { data }) => ({
    ...state,
    loadedHatlar: true,
    hatKomboList: data,
  })),
  on(Kt1344Actions.loadKt1344HatlarFailure, (state, { error }) => ({
    ...state,
    error,
    loadedHatlar: false,
  })),

  on(Kt1344Actions.saveKt1344Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1344Actions.saveKt1344Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);
export function reducer(state: State | undefined, action: Action) {
  return kt1344Reducer(state, action);
}
