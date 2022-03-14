import { ErrorModel, KtAtBobinBalikKuyrugu } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1213Actions from './kt-1213.actions';

export const KT_1213_FEATURE_KEY = 'kt1213';

export interface State {
  data: KtAtBobinBalikKuyrugu[];
  defaultRow: KtAtBobinBalikKuyrugu;
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
    bobinBalikKuyruguKodu: null,
    bobinBalikKuyruguAciklama: null,
    kontrolAktifTaslak: null,

   },
};

const kt1213Reducer = createReducer(
  initialState,
  on(Kt1213Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1213Actions.loadKt1213Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1213Actions.loadKt1213Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1213Actions.saveKt1213Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1213Actions.saveKt1213Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1213Reducer(state, action);
}
