import { ErrorModel, KtAtNumune, KtStNumuneBaz, KtStNumuneYeri, KtStNumuneYonu } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1211Actions from './kt-1211.actions';

export const KT_1211_FEATURE_KEY = 'kt1211';

export interface State {
  data: KtAtNumune[];
  numuneBazlari: KtStNumuneBaz[];
  numuneYonleri: KtStNumuneYonu[];
  numuneYerleri: KtStNumuneYeri[];
  defaultRow: KtAtNumune;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  numuneBazlari: [],
  numuneYerleri: [],
  numuneYonleri: [],
  loaded: false,
  defaultRow: {
    id: null,
    durum: 'A',
    etag: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    uretimOzellikTipi: '010',
    numuneKodu: null,
    numuneYeriKodu: null,
    numuneYonuKodu: null,
    numuneBazKodu: null,
    adet: null,
    tonaj: null,
    numuneYonu: null,
    numuneBaz: null,
    numuneYeri: null,
    numuneText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1211Reducer = createReducer(
  initialState,
  on(Kt1211Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1211Actions.loadKt1211Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktAtNumuneList,
    numuneYonleri: data.ktStNumuneYonuList,
    numuneYerleri: data.ktStNumuneYeriList,
    numuneBazlari: data.ktStNumuneBazList,
  })),
  on(Kt1211Actions.loadKt1211Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1211Actions.saveKt1211Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1211Actions.saveKt1211Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1211Reducer(state, action);
}
