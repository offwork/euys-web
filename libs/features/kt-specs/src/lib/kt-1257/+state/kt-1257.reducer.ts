import { ErrorModel, KtAtYuzeyDuzgunlugu } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1257Actions from './kt-1257.actions';

export const KT_1257_FEATURE_KEY = 'kt1257';

export interface State {
  data: KtAtYuzeyDuzgunlugu[];
  defaultRow: KtAtYuzeyDuzgunlugu;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,

    yuzeyDuzgunluguKodu: null,
    maxSapmaMm: null,
    referansUzunluk: null,

    uretimOzellikTipi: null,
    durum: 'A',
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,

    yuzeyDuzgunluguText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1257Reducer = createReducer(
  initialState,
  on(Kt1257Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1257Actions.loadKt1257Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1257Actions.loadKt1257Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1257Actions.saveKt1257Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1257Actions.saveKt1257Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1257Reducer(state, action);
}
