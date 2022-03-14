import { createReducer, on, Action } from '@ngrx/store';
import { ErrorModel, KtAt2SckHadSarilmaSicakl } from '@euys/api-interfaces';
import * as Kt1204Actions from './kt-1204.actions';

export const KT_1204_FEATURE_KEY = 'kt1204';

export interface State {
  data: KtAt2SckHadSarilmaSicakl[];
  defaultRow: KtAt2SckHadSarilmaSicakl;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    etag: null,
    uretimOzellikTipi: '004',
    islemTipiNo: null,
    durum: 'A',
    olusturanKisi: '108806',
    islemYapanKisi: '108806',
    islemYapanMenu: null,
    sckHad2SarilmaSicaklkKodu: null,
    hdf2SicakHadSarilmaSicak: null,
    min2SicakHadSarilmaSicak: null,
    max2SicakHadSarilmaSicak: null,
    ozelTalimat: null,
    sckHad2SarilmaSicaklkText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1204Reducer = createReducer(
  initialState,
  on(Kt1204Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1204Actions.loadKt1204Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1204Actions.loadKt1204Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Kt1204Actions.saveKt1204Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1204Actions.saveKt1204Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1204Reducer(state, action);
}
