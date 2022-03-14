import { Action, createReducer, on } from '@ngrx/store';
import * as Up3015Actions from './up-3015.actions';

export const UP_3015_FEATURE_KEY = 'up3015';

export interface State {
  rumuzList: string[];
}

export const initialState: State = {
  rumuzList: [],
};

const up3015Reducer = createReducer(
  initialState,
  on(Up3015Actions.init, state => ({ ...state })),
  on(Up3015Actions.loadRumuzListSuccess, (state, { rumuzList }) => ({
    ...state,
    rumuzList: rumuzList.map(rumuz => rumuz.rumuz),
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return up3015Reducer(state, action);
}
