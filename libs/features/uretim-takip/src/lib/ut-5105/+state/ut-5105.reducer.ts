import {
  ErrorModel,
  UtStHatTanim,
  UtStTankDurulTanim,
  UtStVardiyaUretim,
  UtTankDurulama,
  UtTankDurulamaLimit,
} from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import moment from 'moment';

import * as Ut5105Actions from './ut-5105.actions';

export const UT_5105_FEATURE_KEY = 'ut5105';

export interface State {
  data?: UtTankDurulama[];
  dataLog?: UtTankDurulama[];
  utTankDurulamaLimitList: UtTankDurulamaLimit[];
  vardiyaUretimleri: UtStVardiyaUretim[];
  hatKoduList: UtStHatTanim[];
  tankNoList: UtStTankDurulTanim[];
  loaded: boolean;
  error?: ErrorModel;
  utTankDurulamaCode?: { utTankDurulama: UtTankDurulama; code: string };
}
export const initialState: State = {
  data: [],
  dataLog: [],
  utTankDurulamaLimitList: [],
  vardiyaUretimleri: [],
  hatKoduList: [],
  tankNoList: [],
  loaded: false,
  utTankDurulamaCode: { utTankDurulama: {} as UtTankDurulama, code: '' },
};
const ut5105Reducer = createReducer(
  initialState,
  on(Ut5105Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Ut5105Actions.loadUt5105Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.utTankDurulamaList
      .map(item => ({
        ...item,
        olcumTarihiDate: new Date(item.olcumTarihi),
        olcumSaatiDate: moment(item.olcumSaati, 'HH:mm:ss').toDate(),
      }))
      .sort(
        (itemA, itemB) => Number(itemA.vardiyaNo) - Number(itemB.vardiyaNo)
      ),
    vardiyaUretimleri: data.utStVardiyaUretimList,
    hatKoduList: data.utStHatTanimList,
    tankNoList: data.utStTankDurulTanimList,
    utTankDurulamaLimitList: data.utTankDurulamaLimitList,
  })),
  on(Ut5105Actions.loadUt5105LogSuccess, (state, { data }) => ({
    ...state,
    dataLog: data,
  })),
  on(Ut5105Actions.saveUt5105Success, (state, { utTankDurulama, code }) => ({
    ...state,
    utTankDurulamaCode: {
      utTankDurulama: {
        ...utTankDurulama,
        olcumTarihiDate: new Date(utTankDurulama.olcumTarihi),
      },
      code,
    },
    loaded: true,
  })),
  on(Ut5105Actions.saveUt5105Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ut5105Reducer(state, action);
}
