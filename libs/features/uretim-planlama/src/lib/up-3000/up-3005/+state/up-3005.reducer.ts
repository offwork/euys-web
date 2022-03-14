import { YupPlanModel } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './up-3005.actions';

export const UP_3005_FEATURE_KEY = 'up3005';

export interface State {
  data: YupPlanModel[];
  loading: boolean;
}

export const initialState: State = {
  data: [],
  loading: false,
};

const up3005Reducer = createReducer(
  initialState,
  on(actions.load, state => ({ ...state, loading: true })),
  on(actions.loadSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(actions.fail, state => ({ ...state, loading: false }))
);

export function reducer(state: State | undefined, action: Action) {
  return up3005Reducer(state, action);
}
