import { ErrorModel, KtAt1SckHadSarilmaSicakl } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as Kt1202Actions from './kt-1202.actions';

export const KT_1202_FEATURE_KEY = 'kt1202';

export interface State {
  data: KtAt1SckHadSarilmaSicakl[];
  defaultRow: KtAt1SckHadSarilmaSicakl;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    etag: null,
    uretimOzellikTipi: '002',
    islemTipiNo: null,
    durum: 'A',
    olusturanKisi: '108806',
    islemYapanKisi: '108806',
    sckHad1SarilmaSicaklkKodu: null,
    hdf1SicakHadSarilmaSicak: null,
    min1SicakHadSarilmaSicak: null,
    max1SicakHadSarilmaSicak: null,
    ozelTalimat: null,
    islemYapanMenu: null,
    sckHad1SarilmaSicaklkText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1202Reducer = createReducer(
  initialState,
  on(Kt1202Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1202Actions.loadKt1202Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1202Actions.loadKt1202Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1202Actions.saveKt1202Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1202Actions.saveKt1202Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1202Reducer(state, action);
}
