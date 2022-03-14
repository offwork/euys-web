import { Stage, YupGunlukPlanBilgileriModel } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './up-3020.actions';

export const UP_3020_FEATURE_KEY = 'Up3020';

export interface State {
  stage: Stage;
  updateRecord?: YupGunlukPlanBilgileriModel;
  error?: string | null;
}

export const initialState: State = {
  updateRecord: null,
  stage: Stage.INIT,
};

const Up3020Reducer = createReducer(
  initialState,
  on(actions.init, () => ({ stage: Stage.INIT })),
  on(actions.save, () => ({ stage: Stage.PROGRESS })),
  on(actions.saveSuccess, (_, { dublicate, updateRecord }) => ({
    updateRecord,
    stage: dublicate ? Stage.DUBLICATE : Stage.DONE,
  })),
  on(actions.saveFailure, () => ({ stage: Stage.FAIL }))
);

export function reducer(state: State | undefined, action: Action) {
  return Up3020Reducer(state, action);
}
