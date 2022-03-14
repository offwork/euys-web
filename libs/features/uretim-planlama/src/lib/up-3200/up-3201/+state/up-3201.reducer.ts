import { Stage, UpHatVerim } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as Up3201Actions from './up-3201.actions';

export const UP_3201_FEATURE_KEY = 'up3201';

export interface State {
  upHatVerimList: UpHatVerim[];
  upHatVerim?: UpHatVerim;
  stage: Stage;
}

export const initialState: State = {
  // set initial required properties
  upHatVerimList: [],
  upHatVerim: null,
  stage: Stage.INIT,
};

const up3201Reducer = createReducer(
  initialState,
  on(Up3201Actions.init, state => ({ ...state, upHatVerimList: [] })),
  on(Up3201Actions.loadUpHatVerimListSuccess, (state, action) => ({
    ...state,
    upHatVerimList: action.upHatVerimList,
  })),
  on(Up3201Actions.saveHatVerimSuccess, (state, action) => ({
    ...state,
    upHatVerim: action.upHatVerim,
    stage: Stage.DONE,
  })),
  on(Up3201Actions.saveHatVerimFailure, (state, action) => ({
    ...state,
    stage: Stage.FAIL,
  })),
  on(Up3201Actions.saveHatVerim, (state, action) => ({
    ...state,
    stage: Stage.PROGRESS,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return up3201Reducer(state, action);
}
