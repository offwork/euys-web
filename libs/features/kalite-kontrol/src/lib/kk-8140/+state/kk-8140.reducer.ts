import { Combo, EvetHayir, KkUretimYuzeyKusuru } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as Kk8140Actions from './kk-8140.actions';

export const KK_8140_FEATURE_KEY = 'kk8140';

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

const kk8140Reducer = createReducer(
  initialState,

  on(
    Kk8140Actions.getButunAktifKusurListSuccess,
    (state, { butunAktifKusurList }) => ({
      ...state,
      butunAktifKusurList,
      butunAktifKusurListLoaded: true,
    })
  ),
  on(Kk8140Actions.getButunAktifKusurListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    Kk8140Actions.updateYuzeyKusurDegerleri,
    (state, { kkUretimYuzeyKusuru }) => ({
      ...state,
      yuzeyKusurKaydiList: kkUretimYuzeyKusuru,
    })
  ),

  on(
    Kk8140Actions.getYuzeyKusurKaydiListSuccess,
    (state, { yuzeyKusurKaydi }) => ({
      ...state,
      yuzeyKusurKaydiListLoaded: true,
      yuzeyKusurKaydiList: yuzeyKusurKaydi,
    })
  ),
  on(Kk8140Actions.getYuzeyKusurKaydiListFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kk8140Reducer(state, action);
}
