import { ErrorModel, KtAtAlkaliTemizleme } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1206Actions from './kt-1206.actions';

export const KT_1206_FEATURE_KEY = 'kt1206';

export interface State {
  data: KtAtAlkaliTemizleme[];
  loaded: boolean;
  error?: ErrorModel;
  defaultRow: KtAtAlkaliTemizleme;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    alkaliTemizlemeKodu: null,
    minOnBanyoSicaklik: null,
    maxOnBanyoSicaklik: null,
    minOnBanyoKonsantrasyon: null,
    maxOnBanyoKonsantrasyon: null,
    hedefAnaBanyoSicaklik: null,
    minAnaBanyoSicaklik: null,
    maxAnaBanyoSicaklik: null,
    hedefAnaBanyoKonsantrasyon: null,
    minAnaBanyoKonsantrasyon: null,
    maxAnaBanyoKonsantrasyon: null,
    uretimOzellikTipi: null,
    durum: 'A',
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    alkaliTemizlemeText: null,
    kontrolAktifTaslak: null,

  },
};

const kt1206Reducer = createReducer(
  initialState,
  on(Kt1206Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1206Actions.loadKt1206Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1206Actions.loadKt1206Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1206Actions.saveKt1206Success, (state, { record }) =>  ({ ...state, record, loaded: true })),
  on(Kt1206Actions.saveKt1206Failure, (state, { error }) =>  ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1206Reducer(state, action);
}
