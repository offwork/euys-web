import {
  ErrorModel,
  KtAtYuzeyGorunumu,
  KtOiTanimPuruzBirim,
  KtOiTanimYuzeyDurumu,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1258Actions from './kt-1258.actions';

export const KT_1258_FEATURE_KEY = 'kt1258';

export interface State {
  data: KtAtYuzeyGorunumu[];
  tanimPuruzBirimleri: KtOiTanimPuruzBirim[];
  tanimYuzeyDurumulari: KtOiTanimYuzeyDurumu[];
  defaultRow: KtAtYuzeyGorunumu;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  tanimPuruzBirimleri: [],
  tanimYuzeyDurumulari: [],
  loaded: false,
  defaultRow: {
    id: null,
    durum: 'A',
    etag: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    uretimOzellikTipi: '060',
    yuzeyGorunumuKodu: null,
    puruzlulukBirimKodu: null,
    yuzeyDurumKodu: null,
    minPuruzluluk: null,
    maxPuruzluluk: null,
    puruzlulukBirimi: null,
    comboYuzeyDurumAciklama: null,
    yuzeyGorunumuText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1258Reducer = createReducer(
  initialState,
  on(Kt1258Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1258Actions.loadKt1258Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktAtYuzeyGorunumuList,
    tanimPuruzBirimleri: data.ktOiTanimPuruzBirimList,
    tanimYuzeyDurumulari: data.ktOiTanimYuzeyDurumuList,
  })),
  on(Kt1258Actions.loadKt1258Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Kt1258Actions.saveKt1258Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1258Actions.saveKt1258Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1258Reducer(state, action);
}
