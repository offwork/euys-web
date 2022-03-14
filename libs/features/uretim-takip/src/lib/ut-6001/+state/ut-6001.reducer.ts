import {
  ErrorModel,
  UtKusurluIstifPaketModel,
  UtStHatTanimModelList,
  UtStKusurIstifKaliteModelList,
} from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as Ut6001Actions from './ut-6001.actions';

export const UT_6001_FEATURE_KEY = 'ut6001';

export interface State {
  data?: UtKusurluIstifPaketModel[];
  kusurIstifKaliteListesi?: UtStKusurIstifKaliteModelList[];
  hatTanimListesi?: UtStHatTanimModelList[];
  selectedId?: string | number; // which Ut6001 record has been selected
  loaded: boolean; // has the Ut6001 list been loaded
  error?: ErrorModel; // last known error (if any)
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
};

const ut6001Reducer = createReducer(
  initialState,
  on(Ut6001Actions.init, state => ({ ...state, loaded: false, error: null })),
  on(Ut6001Actions.sorgula, state => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(Ut6001Actions.loadUt6001Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.map(item => ({
      ...item,
      islemTarihiDate: new Date(item.islemTarihi),
    })),
  })),
  on(Ut6001Actions.loadUt6001Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  //Config
  on(
    Ut6001Actions.configUt6001Success,
    (state, { utKusurluIstifPaketiComboValueModel }) => ({
      ...state,
      kusurIstifKaliteListesi:
        utKusurluIstifPaketiComboValueModel.utStKusurIstifKaliteModelList,
      hatTanimListesi:
        utKusurluIstifPaketiComboValueModel.utStHatTanimModelList,
      loaded: true,
    })
  ),
  on(Ut6001Actions.config6001Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  //Save
  on(
    Ut6001Actions.saveUt6001Success,
    (state, { utKusurluIstifPaketModel }) => ({
      ...state,
      utKusurluIstifPaketModel,
      loaded: true,
    })
  ),
  on(Ut6001Actions.saveUt6001Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  //Iptal
  on(
    Ut6001Actions.iptalUt6001Success,
    (state, { utKusurluIstifPaketModel }) => ({
      ...state,
      utKusurluIstifPaketModel,
      loaded: true,
    })
  ),
  on(Ut6001Actions.iptalUt6001Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ut6001Reducer(state, action);
}
