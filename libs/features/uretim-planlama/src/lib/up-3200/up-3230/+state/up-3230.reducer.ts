import { ImalatLotResponseHataModel } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Up3230Actions from './up-3230.actions';

export const UP_3230_FEATURE_KEY = 'up3230';

export interface State {
  progress: boolean;
  failedUpdateList: ImalatLotResponseHataModel[];
}

export const initialState: State = {
  failedUpdateList: null,
  progress: false,
};

const up3230Reducer = createReducer(
  initialState,
  on(Up3230Actions.init, state => ({
    ...state,
    failedUpdateList: null,
    progress: false,
  })),
  on(Up3230Actions.update, state => ({
    ...state,
    failedUpdateList: null,
    progress: true,
  })),
  on(Up3230Actions.updateSuccess, (state, { failedUpdateList }) => ({
    ...state,
    failedUpdateList: failedUpdateList || [],
    progress: false,
  })),
  on(Up3230Actions.updateFailure, state => ({
    ...state,
    progress: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return up3230Reducer(state, action);
}
