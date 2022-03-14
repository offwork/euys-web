import { state } from '@angular/animations';
import {
  UtStHatTanim,
  UtStTankDurulTanim,
  UtTankDurulamaLimit,
} from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './ut-5104.actions';

export const UT_5104_FEATURE_KEY = 'ut5104';

export interface State {
  tankList: UtStTankDurulTanim[];
  hatList: UtStHatTanim[];
  loading: boolean; // has the Ut5104 list been loaded
  isUpdate: boolean;
  utTankDurulamaLimit: UtTankDurulamaLimit;
}

export const initialState: State = {
  // set initial required properties
  utTankDurulamaLimit: null,
  loading: false,
  tankList: [],
  hatList: [],
  isUpdate: false,
};

const ut5104Reducer = createReducer(
  initialState,
  on(actions.save, state => ({
    ...state,
    loading: true,
  })),
  on(actions.loadUt5104Success, (state, action) => ({
    ...state,
    tankList: action.data.utStTankDurulTanimList,
    hatList: action.data.utStHatTanimList,
  })),
  on(actions.saveUt5104Success, (state, action) => ({
    ...state,
    loading: false,
    isUpdate: action.code === '1',
    utTankDurulamaLimit:
      action.code === '1' ? action.utTankDurulamaLimit : null,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ut5104Reducer(state, action);
}
