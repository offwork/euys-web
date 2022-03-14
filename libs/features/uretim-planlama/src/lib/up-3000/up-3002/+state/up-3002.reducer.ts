import {
  UpYupBazHatPlanliDuruslarDonusModel,
  UpYupBazHatUretimHedefDonusModel,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { uniq } from 'lodash';
import * as actions from './up-3002.actions';

export const UP_3002_FEATURE_KEY = 'Up3002';

export interface State {
  planliDuruslar: UpYupBazHatPlanliDuruslarDonusModel[];
  planliDuruslarLoading: boolean;
  planliDuruslarTesisAdlari: string[];
  uretimHedefleri: UpYupBazHatUretimHedefDonusModel[];
  uretimHedefleriLoading: boolean;
  uretimHedefleriTesisAdlari: string[];
}

export const initialState: State = {
  planliDuruslar: [],
  planliDuruslarLoading: false,
  planliDuruslarTesisAdlari: [],
  uretimHedefleri: [],
  uretimHedefleriLoading: false,
  uretimHedefleriTesisAdlari: [],
};

const Up3002Reducer = createReducer(
  initialState,
  on(actions.init, state => ({ ...state, planliDuruslar: [] })),
  on(actions.loadPlanliDuruslar, state => ({
    ...state,
    planliDuruslar: [],
    planliDuruslarTesisAdlari: [],
    planliDuruslarLoading: true,
  })),
  on(actions.loadUretimHedefleri, state => ({
    ...state,
    uretimHedefleri: [],
    uretimHedefleriTesisAdlari: [],
    uretimHedefleriLoading: true,
  })),
  on(actions.loadPlanliDuruslarFailure, state => ({
    ...state,
    uretimHedefleriLoading: false,
  })),
  on(actions.loadUretimHedefleriFailure, state => ({
    ...state,
    uretimHedefleriLoading: false,
  })),
  on(actions.loadPlanliDuruslarSuccess, (state, { planliDuruslar }) => ({
    ...state,
    planliDuruslar,
    planliDuruslarLoading: false,
    planliDuruslarTesisAdlari: uniq(
      planliDuruslar.map(({ hatTesisAdi }) => hatTesisAdi)
    ),
  })),
  on(actions.loadUretimHedefleriSuccess, (state, { uretimHedefleri }) => ({
    ...state,
    uretimHedefleri,
    uretimHedefleriLoading: false,
    uretimHedefleriTesisAdlari: uniq(
      uretimHedefleri.map(({ hatTesisAdi }) => hatTesisAdi)
    ),
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return Up3002Reducer(state, action);
}
