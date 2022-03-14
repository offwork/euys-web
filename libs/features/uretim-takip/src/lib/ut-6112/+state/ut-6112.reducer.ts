import { Action, createReducer, on } from '@ngrx/store';

import * as Ut6112Actions from './ut-6112.actions';
import { ErrorModel, UtDurdurmaStatuModel } from '@euys/api-interfaces';

export const UT_6112_FEATURE_KEY = 'ut6112';

export interface State {
  data?: UtDurdurmaStatuModel[];
  loaded: boolean; // has the Ut6112 list been loaded
  error?: ErrorModel; // last known error (if any)
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
};

const ut6112Reducer = createReducer(
  initialState,
  on(Ut6112Actions.init, state => ({ ...state, loaded: false, error: null })),
  on(Ut6112Actions.loadUt6112Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data,
  })),
  on(Ut6112Actions.loadUt6112Failure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ut6112Reducer(state, action);
}
