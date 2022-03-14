import { ErrorModel, KtAtYuzeyDuzgunluguIUnit } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1261Actions from './kt-1261.actions';

export const KT_1261_FEATURE_KEY = 'kt1261';

export interface State {
  data: KtAtYuzeyDuzgunluguIUnit[];
  defaultRow: KtAtYuzeyDuzgunluguIUnit;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    yuzeyDuzgunluguIUnitKodu: null,
    hedefYuzeyDuzgunlugu: null,
    pozitifTolerans: null,
    negatifTolerans: null,
    uretimOzellikTipi: null,
    durum: 'A',
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    yuzeyDuzgunluguIUnitText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1261Reducer = createReducer(
  initialState,
  on(Kt1261Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1261Actions.loadKt1261Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1261Actions.loadKt1261Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1261Reducer(state, action);
}
