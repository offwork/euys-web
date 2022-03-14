import { Stage } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './up-3003.actions';

export const UP_3003_FEATURE_KEY = 'Up3003';

export interface State {
  stage: Stage;
}

export const initialState: State = {
  stage: Stage.INIT,
};

const Up3003Reducer = createReducer(
  initialState,
  on(actions.init, state => ({ ...state, stage: Stage.INIT })),
  on(actions.save, state => ({ ...state, stage: Stage.PROGRESS })),
  on(actions.done, state => ({ ...state, stage: Stage.DONE })),
  on(actions.fail, state => ({ ...state, stage: Stage.FAIL }))
);

export function reducer(state: State | undefined, action: Action) {
  return Up3003Reducer(state, action);
}
