import { ErrorModel, KtAtKenarEgriligi } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1237Actions from './kt-1237.actions';

export const KT_1237_FEATURE_KEY = 'kt1237';

export interface State {
  data: KtAtKenarEgriligi[];
  defaultRow: KtAtKenarEgriligi;
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
    kenarEgriligiKodu: null,
    maxKenarEgriligi: null,
    referansUzunlugu:  null,
    kenarEgriligiText: null,
    kontrolAktifTaslak: null,

  },
};

const kt1237Reducer = createReducer(
  initialState,
  on(Kt1237Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1237Actions.loadKt1237Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1237Actions.loadKt1237Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1237Actions.saveKt1237Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1237Actions.saveKt1237Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1237Reducer(state, action);
}
