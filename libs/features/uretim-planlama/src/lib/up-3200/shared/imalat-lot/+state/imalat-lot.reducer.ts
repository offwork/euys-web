import {
  ImalatLotResponseModel,
  UpStMlnStatuModel,
  UpStMlnTedarikTipiModel,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as ImalatLotActions from './imalat-lot.actions';

export const IMALAT_LOT_FEATURE_KEY = 'imalatLot';

export interface State {
  loading: boolean;
  imalatLotList: ImalatLotResponseModel[];
  tedarikTipiList: UpStMlnTedarikTipiModel[];
  statuList: UpStMlnStatuModel[];
}

export const initialState: State = {
  loading: false,
  imalatLotList: [],
  tedarikTipiList: [],
  statuList: [],
};

const imalatLotReducer = createReducer(
  initialState,
  on(ImalatLotActions.init, state => ({
    ...state,
    loading: false,
    imalatLotList: [],
  })),
  on(ImalatLotActions.loadImalatLotList, state => ({
    ...state,
    loading: true,
  })),
  on(ImalatLotActions.loadImalatLotListSuccess, (state, { imalatLotList }) => ({
    ...state,
    imalatLotList,
    loading: false,
  })),
  on(ImalatLotActions.loadImalatLotListFailure, state => ({
    ...state,
    loading: false,
  })),
  on(
    ImalatLotActions.loadTedarikTipiListSuccess,
    (state, { tedarikTipiList }) => ({
      ...state,
      tedarikTipiList,
    })
  ),
  on(ImalatLotActions.loadStatuListSuccess, (state, { statuList }) => ({
    ...state,
    statuList,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return imalatLotReducer(state, action);
}
