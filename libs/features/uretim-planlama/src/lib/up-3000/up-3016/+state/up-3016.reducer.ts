import { YupKapasiteRaporGrubuDonusModel } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Up3016Actions from './up-3016.actions';

export const UP_3016_FEATURE_KEY = 'up3016';

export interface State {
  kapasiteRaporGrubuList: YupKapasiteRaporGrubuDonusModel[];
  rumuzList: string[];
  processing: boolean;
}

export const initialState: State = {
  kapasiteRaporGrubuList: null,
  rumuzList: [],
  processing: false,
};

const up3016Reducer = createReducer(
  initialState,
  on(Up3016Actions.init, state => ({
    ...state,
    kapasiteRaporGrubuList: null,
    rumuzList: [],
  })),
  on(
    Up3016Actions.loadKapasiteRaporGrubuListSuccess,
    (state, { kapasiteRaporGrubuList }) => ({
      ...state,
      kapasiteRaporGrubuList,
    })
  ),
  on(Up3016Actions.loadRumuzListSuccess, (state, { rumuzList }) => ({
    ...state,
    rumuzList: rumuzList.map(rumuz => rumuz.rumuz),
  })),
  on(Up3016Actions.deleteKapasiteRaporGrubuTanim, state => ({
    ...state,
    processing: true,
  })),
  on(Up3016Actions.deleteKapasiteRaporGrubuTanimSuccess, state => ({
    ...state,
    processing: false,
  })),
  on(Up3016Actions.updateKapasiteRaporGrubuTanim, state => ({
    ...state,
    processing: true,
  })),
  on(Up3016Actions.updateKapasiteRaporGrupTanimSuccess, state => ({
    ...state,
    processing: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return up3016Reducer(state, action);
}
