import { ErrorModel, KtAtKoseDikligi } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1238Actions from './kt-1238.actions';

export const KT_1238_FEATURE_KEY = 'kt1238';

export interface State {
  data: KtAtKoseDikligi[];
  defaultRow: KtAtKoseDikligi;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,

    koseDikligiKodu: null,
    maxKoseDikligi: null,

    uretimOzellikTipi: null,
    durum: 'A',
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    kontrolAktifTaslak: null,
  },
};

const kt1238Reducer = createReducer(
  initialState,
  on(Kt1238Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1238Actions.loadKt1238Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1238Actions.loadKt1238Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1238Actions.saveKt1238Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1238Actions.saveKt1238Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1238Reducer(state, action);
}
