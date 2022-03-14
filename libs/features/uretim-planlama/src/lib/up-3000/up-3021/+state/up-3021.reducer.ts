import {
  Stage,
  YupGunlukPlanDetayBilgileriDonusModel,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { uniq } from 'lodash';
import * as actions from './up-3021.actions';

export const UP_3001_FEATURE_KEY = 'Up3021';

export interface State {
  data: YupGunlukPlanDetayBilgileriDonusModel[];
  tesisAdlari: string[];
  stage: Stage;
  error?: string | null;
}

export const initialState: State = {
  data: [],
  tesisAdlari: [],
  stage: Stage.INIT,
};

const Up3021Reducer = createReducer(
  initialState,
  on(actions.init, state => ({
    ...state,
    data: [],
    tesisAdlari: [],
    stage: Stage.INIT,
    error: null,
  })),
  on(actions.load, state => ({ ...state, stage: Stage.PROGRESS })),
  on(actions.loadSuccess, (state, { data }) => ({
    ...state,
    data,
    tesisAdlari: uniq(data.map(({ hatTesisAdi }) => hatTesisAdi)),
    stage: Stage.DONE,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return Up3021Reducer(state, action);
}
