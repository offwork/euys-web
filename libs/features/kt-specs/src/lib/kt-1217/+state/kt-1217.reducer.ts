import { ErrorModel, KtCalHattiYuzdeUzama } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1217Actions from './kt-1217.actions';

export const KT_1217_FEATURE_KEY = 'kt1217';

export interface State {
  calYuzdeUzama: KtCalHattiYuzdeUzama[];
  defaultRow: KtCalHattiYuzdeUzama;
  loaded: boolean;
  error?: ErrorModel;
}

export interface Kt1217PartialState {
  readonly [KT_1217_FEATURE_KEY]: State;
}

export const initialState: State = {
  calYuzdeUzama: [],
  defaultRow: {
    id: null,
    etag: null,
    uretimOzellikTipi: null,
    islemTipiNo: null,
    durum: 'A',
    olusturanKisi: null,
    islemYapanKisi: null,
    calHatTempYuzdeUzamaKodu: null,
    hedefYuzdeUzama: null,
    minYuzdeUzama: null,
    maxYuzdeUzama: null,
    islemYapanMenu: null,
    calTemperYuzdeUzamaText: null,
    kontrolAktifTaslak: null,

  },
  loaded: false,
  error: null,
};

const kt1217Reducer = createReducer(
  initialState,
  on(Kt1217Actions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(Kt1217Actions.loadKt1217Success, (state, { calYuzdeUzama }) => ({ ...state, calYuzdeUzama, loaded: true })),
  on(Kt1217Actions.loadKt1217Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1217Actions.updateKt1217, (state) => ({ ...state, loaded: false, error: null })),
  on(Kt1217Actions.updateKt1217Success, (state) => ({ ...state, loaded: true })),
  on(Kt1217Actions.updateKt1217Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1217Actions.saveKt1217, (state) => ({ ...state, loaded: false, error: null })),
  on(Kt1217Actions.saveKt1217Success, (state) => ({ ...state, loaded: true })),
  on(Kt1217Actions.saveKt1217Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1217Reducer(state, action);
}
