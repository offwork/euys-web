import { ErrorModel, KtAtTcalSogutmaYaslandirma } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1252Actions from './kt-1252.actions';

export const KT_1252_FEATURE_KEY = 'kt1252';

export interface State {
  data: KtAtTcalSogutmaYaslandirma[];
  defaultRow: KtAtTcalSogutmaYaslandirma;
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
    islemYapanMenu: null,

    tcalSogutmaYaslandirmaKodu: null,

    hedefRcsSicaklik: null,
    minRcsSicaklik: null,
    maxRcsSicaklik: null,
    minRcsSogutmaHizi: null,
    maxRcsSogutmaHizi: null,
    hedefOasCsSicaklik: null,
    minOasCsSicaklik: null,
    maxOasCsSicaklik: null,
    minOasCsSogutmaHizi: null,
    maxOasCsSogutmaHizi: null,
    hedefOasCsSure: null,
    minOasCsSure: null,
    maxOasCsSure: null,
    hedefFcsSicaklik: null,
    minFcsSicaklik: null,
    maxFcsSicaklik: null,
    minFcsSogutmaHizi: null,
    maxFcsSogutmaHizi: null,

    tcalSogutmaYaslandirmaText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1252Reducer = createReducer(
  initialState,
  on(Kt1252Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1252Actions.loadKt1252Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1252Actions.loadKt1252Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1252Actions.saveKt1252Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1252Actions.saveKt1252Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1252Reducer(state, action);
}
