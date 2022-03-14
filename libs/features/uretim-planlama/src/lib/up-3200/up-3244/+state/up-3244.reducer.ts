import { ImalatLotunHikayesiDonusModel } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Up3244Actions from './up-3244.actions';

export const UP_3244_FEATURE_KEY = 'up3244';

export interface State {
  imalatLotunHikayesiList: ImalatLotunHikayesiDonusModel[];
}

export const initialState: State = {
  imalatLotunHikayesiList: null,
};

const up3244Reducer = createReducer(
  initialState,
  on(Up3244Actions.init, state => ({
    ...state,
    imalatLotunHikayesiList: null,
  })),
  on(
    Up3244Actions.loadImalatLotunHikayesiListSuccess,
    (state, { imalatLotunHikayesiList }) => ({
      ...state,
      imalatLotunHikayesiList,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return up3244Reducer(state, action);
}
