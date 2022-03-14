import { state } from '@angular/animations';
import {
  UtStHatTanim,
  UtStTankAsitlTanim,
  UtTankAsitlemeLimit,
} from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './ut-5102.actions';

export const UT_5102_FEATURE_KEY = 'ut5102';

export interface State {
  tankList: UtStTankAsitlTanim[];
  hatList: UtStHatTanim[];
  loading: boolean; // has the Ut5102 list been loaded
  isUpdate: boolean;
  utTankAsitlemeLimit: UtTankAsitlemeLimit;
}

export const initialState: State = {
  // set initial required properties
  utTankAsitlemeLimit: null,
  loading: false,
  tankList: [],
  hatList: [],
  isUpdate: false,
};

const ut5102Reducer = createReducer(
  initialState,
  on(actions.save, state => ({
    ...state,
    loading: true,
  })),
  on(actions.loadUt5102Success, (state, action) => ({
    ...state,
    tankList: action.data.utStTankAsitlTanimList,
    hatList: action.data.utStHatTanimList,
  })),
  on(actions.saveUt5102Success, (state, action) => ({
    ...state,
    loading: false,
    isUpdate: action.code === '1',
    utTankAsitlemeLimit:
      action.code === '1' ? action.utTankAsitlemeLimit : null,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ut5102Reducer(state, action);
}
