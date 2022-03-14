import { Stage } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as actions from './up-3010.actions';

export const UP_3010_FEATURE_KEY = 'up3010';

export interface State {
stage : Stage
}

export const initialState: State = {
  // set initial required properties
  stage: Stage.INIT
};

const up3010Reducer = createReducer(
  initialState,
  on(actions.init, () => ({ stage : Stage.INIT })),
  on(actions.save, () => ({ stage : Stage.PROGRESS })),
  on(actions.success, () => ({ stage : Stage.DONE })),
  on(actions.fail, () => ({ stage : Stage.FAIL }))
);

export function reducer(state: State | undefined, action: Action) {
  return up3010Reducer(state, action);
}
