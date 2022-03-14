import { createReducer, on, Action } from '@ngrx/store';

import * as Ut6002Actions from './ut-6002.actions';
import {
  ErrorModel,
  UtKusurluIstifPaketModel,
  UtStKusurIstifKaliteModelList,
  UtStHatTanimModelList,
} from '@euys/api-interfaces';

export const UT_6002_FEATURE_KEY = 'ut6002';

export interface State {
  data?: UtKusurluIstifPaketModel[];
  kusurIstifKaliteListesi?: UtStKusurIstifKaliteModelList[];
  hatTanimListesi?: UtStHatTanimModelList[];
  selectedId?: string | number; // which Ut6002 record has been selected
  loaded: boolean; // has the Ut6002 list been loaded
  error?: ErrorModel; // last known error (if any)
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
};

const ut6002Reducer = createReducer(
  initialState,
  on(Ut6002Actions.init, state => ({ ...state, loaded: false, error: null })),
  on(Ut6002Actions.sorgula, state => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(Ut6002Actions.loadUt6002Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.map(item => ({
      ...item,
      olusturmaTarihiDate: new Date(item.olusturmaTarihi),
      islemTarihiDate: new Date(item.islemTarihi),
    })),
  })),
  on(Ut6002Actions.loadUt6002Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  //Config
  on(
    Ut6002Actions.configUt6002Success,
    (state, { utKusurluIstifPaketiComboValueModel }) => ({
      ...state,
      kusurIstifKaliteListesi:
        utKusurluIstifPaketiComboValueModel.utStKusurIstifKaliteModelList,
      hatTanimListesi:
        utKusurluIstifPaketiComboValueModel.utStHatTanimModelList,
      loaded: true,
    })
  ),
  on(Ut6002Actions.config6002Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ut6002Reducer(state, action);
}
