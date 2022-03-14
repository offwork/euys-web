import {
  ErrorModel,
  KtAtTemperMerdaneTipi,
  KtOiTanimYuzeyDurum,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1260Actions from './kt-1260.actions';

export const KT_1260_FEATURE_KEY = 'kt1260';

export interface State {
  data: KtAtTemperMerdaneTipi[];
  tanimYuzeyDurumulari: KtOiTanimYuzeyDurum[];
  defaultRow: KtAtTemperMerdaneTipi;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  tanimYuzeyDurumulari: [],
  loaded: false,
  defaultRow: {
    id: null,
    uretimOzellikTipi: '051',
    olusturanKisi: '100396',
    islemYapanKisi: '100396',
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    durum: 'A',
    temperMerdaneTipiKodu: null,
    yuzeyDurumKodu: null,
    comboYuzeyDurumAciklama: null,
    temperMerdaneTipiText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1260Reducer = createReducer(
  initialState,
  on(Kt1260Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1260Actions.loadKt1260Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktAtTemperMerdaneTipiList,
    tanimYuzeyDurumulari: data.ktOiTanimYuzeyDurumuList,
  })),
  on(Kt1260Actions.loadKt1260Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),

  on(Kt1260Actions.saveKt1260Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1260Actions.saveKt1260Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1260Reducer(state, action);
}
