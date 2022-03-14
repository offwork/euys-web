import { ImalatLotResponseHataModel } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Up3231Actions from './up-3231.actions';

export const UP_3231_FEATURE_KEY = 'up3231';

export interface State {
  progress: boolean;
  failedUpdateList: ImalatLotResponseHataModel[];
}

export const initialState: State = {
  failedUpdateList: null,
  progress: false,
};

const up3231Reducer = createReducer(
  initialState,
  on(Up3231Actions.init, state => ({
    ...state,
    failedUpdateList: null,
    progress: false,
  })),
  on(Up3231Actions.update, state => ({
    ...state,
    failedUpdateList: null,
    progress: true,
  })),
  on(Up3231Actions.updateSuccess, (state, { failedUpdateList }) => ({
    ...state,
    failedUpdateList: failedUpdateList || [],
    progress: false,
  })),
  on(Up3231Actions.updateFailure, state => ({
    ...state,
    progress: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return up3231Reducer(state, action);
}
