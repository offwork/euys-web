import {
  ErrorModel,
  UtCinkoLapa,
  UtCinkoLapaToplam,
  UtStVardiyaUretim,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Ut5101Actions from './ut-5101.actions';

export const UT_5101_FEATURE_KEY = 'Ut5101';

export interface State {
  data?: UtCinkoLapa[];
  dataLog?: UtCinkoLapa[];
  vardiyaUretimleri: UtStVardiyaUretim[];
  lapaToplam: UtCinkoLapaToplam;
  defaultRow: UtCinkoLapa;
  loaded: boolean;
  error?: ErrorModel;
  utCinkoLapaCode?: { utCinkoLapa: UtCinkoLapa; code: string };
}

export const initialState: State = {
  data: [],
  dataLog: [],
  vardiyaUretimleri: [],
  lapaToplam: null,
  loaded: false,
  utCinkoLapaCode: { utCinkoLapa: {} as UtCinkoLapa, code: '' },
  defaultRow: {
    id: null,
    aktifPasif: 'A',
    etag: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    vardiyaTarihi: null,
    cgl1Adet: null,
    cgl1Agirlik: null,
    cgl2Adet: null,
    cgl2Agirlik: null,
    sevkAdet: null,
    sevkAgirlik: null,
    idCinkoLapaEski: null,
    vardiyaNo: '1',
    islemTarihiFormat: null,
    islemSaati: null,
    uretimTarihiDate: new Date(),
    kontrolGuncelleme: null,
  },
};

const Ut5101Reducer = createReducer(
  initialState,
  on(Ut5101Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Ut5101Actions.loadUt5101Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.utCinkoLapaList
      .map(item => ({
        ...item,
        uretimTarihiDate: new Date(item.vardiyaTarihi),
      }))
      .sort(
        (itemA, itemB) => Number(itemA.vardiyaNo) - Number(itemB.vardiyaNo)
      ),
    vardiyaUretimleri: data.utStVardiyaUretimList,
    lapaToplam: data.utCinkoLapaToplam,
    cinkoLapa: data.utCinkoLapa,
  })),
  on(Ut5101Actions.loadUt5101LogSuccess, (state, { data }) => ({
    ...state,
    loaded: true,
    dataLog: data.slice().sort((itemB, itemA) => {
      const a = new Date(itemA.islemTarihiFormat + 'T' + itemA.islemSaati);
      const b = new Date(itemB.islemTarihiFormat + 'T' + itemB.islemSaati);
      return a.getTime() - b.getTime();
    }),
  })),
  on(Ut5101Actions.loadUt5101Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Ut5101Actions.saveUt5101Success, (state, { utCinkoLapa, code }) => ({
    ...state,
    utCinkoLapaCode: {
      utCinkoLapa: {
        ...utCinkoLapa,
        uretimTarihiDate: new Date(utCinkoLapa.vardiyaTarihi),
      },
      code,
    },
    loaded: true,
  })),
  on(Ut5101Actions.saveUt5101Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return Ut5101Reducer(state, action);
}
