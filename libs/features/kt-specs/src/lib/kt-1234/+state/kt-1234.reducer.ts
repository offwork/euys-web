import { ErrorModel, KtAtIiTenekeTemizleme } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1234Actions from './kt-1234.actions';

export const KT_1234_FEATURE_KEY = 'kt1234';

export interface State {
  data: KtAtIiTenekeTemizleme[];
  defaultRow: KtAtIiTenekeTemizleme;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    durum: 'A',
    etag: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    uretimOzellikTipi: '033',
    iiTenekeTemizlemeKodu: null,
    minOnTemizlemeSicaklik: null,
    maxOnTemizlemeSicaklik: null,
    minOnTemizlemeAlkaliKonsan: null,
    maxOnTemizlemeAlkaliKonsan: null,
    minTemizlemeSicaklik: null,
    maxTemizlemeSicaklik: null,
    minTemizlemeAlkaliKonsantra: null,
    maxTemizlemeAlkaliKonsantra: null,
    iiTenekeTemizlemeText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1234Reducer = createReducer(
  initialState,
  on(Kt1234Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1234Actions.loadKt1234Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1234Actions.loadKt1234Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1234Actions.saveKt1234Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1234Actions.saveKt1234Failure, (state, { error }) => ({ ...state, error, loaded: true }))

);

export function reducer(state: State | undefined, action: Action) {
  return kt1234Reducer(state, action);
}
