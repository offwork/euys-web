import {
  AsitlemeBobinModel,
  AsitlemeProsesModel,
  DurulamaProsesModel,
} from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import { BagimsizNumuneGoruntulemeModel } from '@euys/api-interfaces';
import * as Kk8246Actions from './kk-8246.actions';

export const KK_8246_FEATURE_KEY = 'kk8246';

export interface State {
  bagimsizNumuneGoruntuleme: BagimsizNumuneGoruntulemeModel[];
  bagimsizNumuneGoruntulemeLoaded: boolean;
  bagimsizMesajBilgileri: BagimsizNumuneGoruntulemeModel[];
  bagimsizMesajBilgileriLoaded: boolean;
  asitlemeBobinList: AsitlemeBobinModel[];
  asitlemeBobinListLoaded: boolean;
  cplHattiAsitleme: AsitlemeProsesModel[];
  cplHattiAsitlemeLoaded: boolean;
  cplHattiDurulama: DurulamaProsesModel[];
  cplHattiDurulamaLoaded: boolean;
  pplHattiAsitleme: AsitlemeProsesModel[];
  pplHattiAsitlemeLoaded: boolean;
}

export const initialState: State = {
  bagimsizNumuneGoruntuleme: null,
  bagimsizNumuneGoruntulemeLoaded: false,
  bagimsizMesajBilgileri: null,
  bagimsizMesajBilgileriLoaded: false,
  asitlemeBobinList: [],
  asitlemeBobinListLoaded: false,
  cplHattiAsitleme: null,
  cplHattiAsitlemeLoaded: false,
  pplHattiAsitleme: null,
  pplHattiAsitlemeLoaded: false,
  cplHattiDurulama: null,
  cplHattiDurulamaLoaded: false,
};

const kk8246Reducer = createReducer(
  initialState,
  on(
    Kk8246Actions.getAsitlemeBobinListSuccess,
    (state, { asitlemeBobinList }) => ({
      ...state,
      asitlemeBobinList,
      asitlemeBobinListLoaded: true,
    })
  ),
  on(Kk8246Actions.getAsitlemeBobinListFailure, (state, { error }) => ({
    ...state,
    asitlemeBobinListLoaded: false,
    error,
  })),
  on(
    Kk8246Actions.getBagimsizNumuneGoruntulemeSuccess,
    (state, { bagimsizNumuneGoruntuleme }) => ({
      ...state,
      bagimsizNumuneGoruntulemeLoaded: true,
      bagimsizNumuneGoruntuleme,
    })
  ),
  on(Kk8246Actions.getBagimsizNumuneGoruntulemeFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    Kk8246Actions.getBagimsizMesajBilgileriSuccess,
    (state, { bagimsizMesajBilgileri }) => ({
      ...state,
      bagimsizMesajBilgileriLoaded: true,
      bagimsizMesajBilgileri,
    })
  ),
  on(Kk8246Actions.getBagimsizMesajBilgileriFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(Kk8246Actions.getCplHattiAsitlemeFailure, (state, { error }) => ({
    ...state,
    cplHattiAsitlemeLoaded: false,
    error,
  })),
  on(Kk8246Actions.getCplHattiAsitlemeSuccess, (state, { cplHatti }) => ({
    ...state,
    cplHattiAsitlemeLoaded: true,
    cplHattiAsitleme: cplHatti,
  })),
  on(Kk8246Actions.getCplHattiDurulamaFailure, (state, { error }) => ({
    ...state,
    cplHattiAsitlemeLoaded: false,
    error,
  })),
  on(Kk8246Actions.getCplHattiDurulamaSuccess, (state, { cplHatti }) => ({
    ...state,
    cplHattiDurulamaLoaded: true,
    cplHattiDurulama: cplHatti,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kk8246Reducer(state, action);
}
