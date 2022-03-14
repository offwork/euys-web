import { ErrorModel, KtAtTincalTempYuzdeUzama } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1255Actions from './kt-1255.actions';

export const KT_1255_FEATURE_KEY = 'kt1255';

export interface State {
  data: KtAtTincalTempYuzdeUzama[];
  defaultRow: KtAtTincalTempYuzdeUzama;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    etag: null,
    uretimOzellikTipi: null,
    islemTipiNo: null,
    durum: 'A',
    olusturanKisi: null,
    islemYapanKisi: null,
    tincalTempYuzdeUzamaKodu: null,
    hedefYuzdeUzama: null,
    minYuzdeUzama: null,
    maxYuzdeUzama: null,
    minTemperSertlik: null,
    maxTemperSertlik: null,
    tincalTempYuzdeUzamaText: null,
    islemYapanMenu: null,
    kontrolAktifTaslak: null,

  },
};

const kt1255Reducer = createReducer(
  initialState,
  on(Kt1255Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1255Actions.loadKt1255Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1255Actions.loadKt1255Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1255Actions.saveKt1255Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1255Actions.saveKt1255Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1255Reducer(state, action);
}
