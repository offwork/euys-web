import { YupKapasiteRaporGrubuDonusModel } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Up3017Actions from './up-3017.actions';

export const UP_3017_FEATURE_KEY = 'up3017';

export interface State {
  kapasiteRaporGrubuList: YupKapasiteRaporGrubuDonusModel[];
}

export const initialState: State = {
  kapasiteRaporGrubuList: null,
};

const up3017Reducer = createReducer(
  initialState,
  on(Up3017Actions.init, state => ({ ...state, kapasiteRaporGrubuList: null })),
  on(
    Up3017Actions.loadKapasiteRaporGrubuListSuccess,
    (state, { kapasiteRaporGrubuList }) => ({
      ...state,
      kapasiteRaporGrubuList,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return up3017Reducer(state, action);
}
