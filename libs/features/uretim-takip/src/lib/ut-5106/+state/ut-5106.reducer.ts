import {
  ErrorModel,
  UtStVardiyaUretim,
  UtAsitlemeRejenerasyon,
  UtAsitlemeRejenerasyonModel,
  UtAsitlemeRejenerasyonViewModel,
  IslemTipi,
  ResponseModel,
} from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import { map, uniq } from 'lodash';

import * as Ut5106Actions from './ut-5106.actions';

export const UT_5106_FEATURE_KEY = 'ut5106';

export const defaultRow: UtAsitlemeRejenerasyonModel = {
  id: null,
  aktifPasif: 'A',
  etag: null,
  islemTipiNo: IslemTipi.KAYIT,
  islemYapanMenu: null,
  olusturanKisi: '109171',
  islemYapanKisi: '109171',
  islemTarihi: null,
  olusturmaTarihi: null,
  vardiyaTarihi: null,
  gelenKirliAsit: null,
  rejenereEdilenAsit: null,
  gonderilenAsit: null,
  tuketilenKirliAsit: null,
  gelenSafAsit: null,
  idAsitlemeRejenerasyonEski: null,
  vardiyaNo: '1',
  islemTarihiFormat: null,
  islemSaati: null,
  vardiyaTarihiDate: new Date(),
  kayitIslemTipiEnum: IslemTipi.KAYIT,
};

export interface State {
  data?: UtAsitlemeRejenerasyonViewModel;
  dataLog?: UtAsitlemeRejenerasyon[];
  vardiyaUretimleri: UtStVardiyaUretim[];
  vardiyaNoList: string[];
  loaded: boolean;
  error?: ErrorModel;
  utAsitlemeRejenerasyonCode?: ResponseModel<UtAsitlemeRejenerasyonModel>;
  utAsitlemeRejenerasyonModelList: UtAsitlemeRejenerasyonModel[];
}
export const initialState: State = {
  dataLog: [],
  vardiyaUretimleri: [],
  vardiyaNoList: [],
  loaded: false,
  utAsitlemeRejenerasyonModelList: [],
  utAsitlemeRejenerasyonCode: {},
};
const ut5106Reducer = createReducer(
  initialState,
  on(Ut5106Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Ut5106Actions.loadUt5106Success, (state, { data }) => ({
    ...state,
    data,
    loaded: true,
    vardiyaNoList: uniq(map(data.utAsitlemeRejenerasyonModelList, 'vardiyaNo')),
    utAsitlemeRejenerasyonModelList: data.utAsitlemeRejenerasyonModelList.map(
      item => ({
        ...item,
        vardiyaTarihiDate: new Date(item.vardiyaTarihi),
      })
    ),
  })),
  on(Ut5106Actions.loadUt5106LogSuccess, (state, { data }) => ({
    ...state,
    dataLog: data,
  })),
  on(
    Ut5106Actions.saveUt5106Success,
    (state, { utAsitlemeRejenerasyon, code }) => ({
      ...state,
      utAsitlemeRejenerasyonCode: {
        utAsitlemeRejenerasyon: {
          ...utAsitlemeRejenerasyon,
          vardiyaTarihiDate: new Date(utAsitlemeRejenerasyon.vardiyaTarihi),
        },
        code,
      },
      loaded: true,
    })
  ),
  on(Ut5106Actions.saveUt5106Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ut5106Reducer(state, action);
}
