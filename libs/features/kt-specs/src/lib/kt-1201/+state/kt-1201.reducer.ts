import { ErrorModel, KtAt1SckHadIkmalSicakl } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1201Actions from './kt-1201.actions';

export const KT_1201_FEATURE_KEY = 'kt1201';

export interface State {
  data: KtAt1SckHadIkmalSicakl[];
  defaultRow: KtAt1SckHadIkmalSicakl;
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
    sckHad1IkmalSicaklikKodu: null,

    hedefGirisSicakligi: null,
    minGirisSicakligi: null,
    maxGirisSicakligi: null,

    hedefCikisSicakligi: null,
    minCikisSicakligi: null,
    maxCikisSicakligi: null,

    hedefTcrBekletmeKalinligi: null,
    minTcrBekletmeKalinligi: null,
    maxTcrBekletmeKalinligi: null,

    hedefTcrBekletmeSicakligi: null,
    minTcrBekletmeSicakligi: null,
    maxTcrBekletmeSicakligi: null,

    hedefTcrBekletmeSuresi: null,
    minTcrBekletmeSuresi: null,
    maxTcrBekletmeSuresi: null,

    sckHad1IkmalSicaklikText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1201Reducer = createReducer(
  initialState,
  on(Kt1201Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1201Actions.loadKt1201Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1201Actions.loadKt1201Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Kt1201Actions.saveKt1201Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1201Actions.saveKt1201Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1201Reducer(state, action);
}
