import {
  ErrorModel,
  KtAnatabloAmbalajPaket,
  KtAtAmbalajPaket,
  KtSpAmbalajPaket,
  KtUrunAltGrup,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1307Actions from './kt-1307.actions';

export const KT_1307_FEATURE_KEY = 'kt1307';

export interface State {
  data: KtSpAmbalajPaket[];
  anatabloKomboList: KtAtAmbalajPaket[];
  urunAltGrupKomboList: KtUrunAltGrup[];
  ambalajPaketKomboList: KtAnatabloAmbalajPaket[];
  defaultRow: KtSpAmbalajPaket;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  anatabloKomboList: [],
  urunAltGrupKomboList: [],
  ambalajPaketKomboList: [],
  loaded: false,
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
    maxUzunluk: null,
    minUzunluk: null,
    spAmbalajPaketKodu: null,
    ambalajPaketKodu: null,
    urunAltGrupNo: null,
    oiAmbalajTipiAnaTabloKodu: null,
    urunGrupNoAndGrup: null,
    idAndAmbalaj: null,
  },
};

const kt1307Reducer = createReducer(
  initialState,
  on(Kt1307Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1307Actions.loadKt1307Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktSpAmbalajPaketList,
    anatabloKomboList: data.ktAtAmbalajPaketList,
    urunAltGrupKomboList: data.ktUrunAltGrupList,
    ambalajPaketKomboList: data.ktAnatabloAmbalajPaketList,
  })),
  on(Kt1307Actions.loadKt1307Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(Kt1307Actions.saveKt1307Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1307Actions.saveKt1307Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1307Reducer(state, action);
}
