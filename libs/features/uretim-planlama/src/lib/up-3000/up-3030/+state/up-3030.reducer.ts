import { Stage, YupBackUpPlanMamulDonusModel } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { uniq } from 'lodash';
import * as actions from './up-3030.actions';

export const UP_3001_FEATURE_KEY = 'Up3030';

export interface State {
  data: YupBackUpPlanMamulDonusModel[];
  pfUrunGruplari: string[];
  stage: Stage;
  error?: string | null;
  islemDurum: boolean;
}

export const initialState: State = {
  data: [],
  pfUrunGruplari: [],
  stage: Stage.INIT,
  islemDurum: false,
};

const Up3030Reducer = createReducer(
  initialState,
  on(actions.init, state => ({
    ...state,
    data: [],
    pfUrunGruplari: [],
    stage: Stage.INIT,
    error: null,
  })),
  on(actions.save, state => ({ ...state, stage: Stage.PROGRESS })),
  on(actions.saveSuccess, state => ({
    ...state,
    stage: Stage.SAVED,
  })),

  on(actions.load, state => ({ ...state, stage: Stage.PROGRESS })),
  on(actions.loadSuccess, (state, { data, islemSonucModel }) => ({
    ...state,
    data,
    islemDurum: islemSonucModel.islemDurum,
    stage: Stage.DONE,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return Up3030Reducer(state, action);
}
