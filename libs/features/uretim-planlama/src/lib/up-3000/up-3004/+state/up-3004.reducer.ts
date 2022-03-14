import { Stage, YupTaslakAnaModel } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './up-3004.actions';

export const UP_3004_FEATURE_KEY = 'up3004';

export interface State {
  data: YupTaslakAnaModel[];
  loading: boolean;
  stage: Stage;
}

export const initialState: State = {
  data: [],
  loading: false,
  stage: Stage.INIT,
};

const up3004Reducer = createReducer(
  initialState,
  on(actions.init, state => ({ ...state, stage: Stage.INIT, loading: false })),
  on(actions.load, state => ({ ...state, stage: Stage.INIT, loading: true })),
  on(actions.loadSuccess, (state, { data }) => ({
    ...state,
    data: data || [],
    loading: false,
  })),
  on(actions.del, state => ({ ...state, stage: Stage.PROGRESS })),
  on(actions.approve, state => ({ ...state, stage: Stage.PROGRESS })),
  on(actions.disapprove, state => ({ ...state, stage: Stage.PROGRESS })),
  on(actions.edit, state => ({ ...state, stage: Stage.PROGRESS })),
  on(actions.done, state => ({ ...state, stage: Stage.DONE })),
  on(actions.fail, state => ({ ...state, stage: Stage.FAIL, loading: false }))
);

export function reducer(state: State | undefined, action: Action) {
  return up3004Reducer(state, action);
}
