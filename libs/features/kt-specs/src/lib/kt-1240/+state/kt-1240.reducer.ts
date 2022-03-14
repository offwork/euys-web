import { ErrorModel, KtAtKromKaplamaTfsDragout } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1240Actions from './kt-1240.actions';

export const KT_1240_FEATURE_KEY = 'kt1240';

export interface State {
  data: KtAtKromKaplamaTfsDragout[];
  defaultRow: KtAtKromKaplamaTfsDragout;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    etag: null,
    islemYapanMenu: null,
    uretimOzellikTipi: null,
    islemTipiNo: null,
    durum: "A",
    olusturanKisi: null,
    islemYapanKisi: null,
    kromKaplamaTfsDragOutKodu: null,
    minIKaplamaDragOutKonsant: null,
    maxIKaplamaDragOutKonsant: null,
    minIKaplamaDragOutSicaklk: null,
    maxIKaplamaDragOutSicaklk: null,
    minIiKaplamaDragOutKonsan: null,
    maxIiKaplamaDragOutKonsan: null,
    minIiKaplamaDragOutSicakl: null,
    maxIiKaplamaDragOutSicakl: null,
    kromKaplamaTfsDragOutText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1240Reducer = createReducer(
  initialState,
  on(Kt1240Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1240Actions.loadKt1240Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1240Actions.loadKt1240Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1240Actions.saveKt1240Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1240Actions.saveKt1240Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1240Reducer(state, action);
}
