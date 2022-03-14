import {
  ErrorModel,
  UtStHatTanim,
  UtStTankAsitlTanim,
  UtStVardiyaUretim,
  UtTankAsitleme,
  UtTankAsitlemeLimit,
} from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import moment from 'moment';

import * as Ut5103Actions from './ut-5103.actions';

export const UT_5103_FEATURE_KEY = 'ut5103';

export interface State {
  data?: UtTankAsitleme[];
  dataLog?: UtTankAsitleme[];
  utTankAsitlemeLimitList: UtTankAsitlemeLimit[];
  vardiyaUretimleri: UtStVardiyaUretim[];
  hatKoduList: UtStHatTanim[];
  tankNoList: UtStTankAsitlTanim[];
  loaded: boolean;
  error?: ErrorModel;
  utTankAsitlemeCode?: { utTankAsitleme: UtTankAsitleme; code: string };
}
export const initialState: State = {
  data: [],
  dataLog: [],
  utTankAsitlemeLimitList: [],
  vardiyaUretimleri: [],
  hatKoduList: [],
  tankNoList: [],
  loaded: false,
  utTankAsitlemeCode: { utTankAsitleme: {} as UtTankAsitleme, code: '' },
};
const ut5103Reducer = createReducer(
  initialState,
  on(Ut5103Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Ut5103Actions.loadUt5103Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.utTankAsitlemeList
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
    tankNoList: data.utStTankAsitlTanimList,
    utTankAsitlemeLimitList: data.utTankAsitlemeLimitList,
  })),
  on(Ut5103Actions.loadUt5103LogSuccess, (state, { data }) => ({
    ...state,
    dataLog: data,
  })),
  on(Ut5103Actions.saveUt5103Success, (state, { utTankAsitleme, code }) => ({
    ...state,
    utTankAsitlemeCode: {
      utTankAsitleme: {
        ...utTankAsitleme,
        olcumTarihiDate: new Date(utTankAsitleme.olcumTarihi),
      },
      code,
    },
    loaded: true,
  })),
  on(Ut5103Actions.saveUt5103Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ut5103Reducer(state, action);
}
