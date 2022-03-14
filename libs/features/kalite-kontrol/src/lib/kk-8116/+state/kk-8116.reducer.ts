import { Combo, EvetHayir, KkUretimYuzeyKusuru } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as Kk8116Actions from './kk-8116.actions';

export const KK_8116_FEATURE_KEY = 'kk8116';

export interface State {
  yuzeyKusuruVarMi: EvetHayir;
  disableYuzeyKusuruVarMi: boolean;
  yuzeyKusurKaydiList: KkUretimYuzeyKusuru[];
  butunAktifKusurList: Combo[];
  butunAktifKusurListLoaded: boolean;
  yuzeyKusurKaydiListLoaded: boolean;
  defaultYuzeyKusurKodu: string;
  dispoze: boolean;
  minDispozeKusurDerecesi: number;
}
export const initialState: State = {
  yuzeyKusuruVarMi: EvetHayir.HAYIR,
  disableYuzeyKusuruVarMi: false,
  yuzeyKusurKaydiList: [],
  butunAktifKusurList: [],
  butunAktifKusurListLoaded: false,
  yuzeyKusurKaydiListLoaded: true,
  defaultYuzeyKusurKodu: null,
  dispoze: false,
  minDispozeKusurDerecesi: 1,
};

const kk8116Reducer = createReducer(
  initialState,

  on(
    Kk8116Actions.getButunAktifKusurListSuccess,
    (state, { butunAktifKusurList }) => ({
      ...state,
      butunAktifKusurList,
      butunAktifKusurListLoaded: true,
    })
  ),
  on(Kk8116Actions.getButunAktifKusurListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    Kk8116Actions.updateYuzeyKusurDegerleri,
    (state, { kkUretimYuzeyKusuru }) => ({
      ...state,
      yuzeyKusurKaydiList: kkUretimYuzeyKusuru,
    })
  ),

  on(
    Kk8116Actions.getYuzeyKusurKaydiListSuccess,
    (state, { yuzeyKusurKaydi }) => ({
      ...state,
      yuzeyKusurKaydiListLoaded: true,
      yuzeyKusurKaydiList: yuzeyKusurKaydi,
    })
  ),
  on(Kk8116Actions.getYuzeyKusurKaydiListFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kk8116Reducer(state, action);
}
