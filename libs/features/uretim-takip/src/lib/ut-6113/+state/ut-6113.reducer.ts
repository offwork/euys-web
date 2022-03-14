import { Action, createReducer, on } from '@ngrx/store';
import {
  ErrorModel,
  UtDurdurmaKodAdlariModel,
  UtDurdurmaKodAdlariView,
  UtDurdurmaKodlariComboValueModel,
} from '@euys/api-interfaces';
import * as Ut6113Actions from './ut-6113.actions';

export const UT_6113_FEATURE_KEY = 'ut6113';

export interface State {
  data?: UtDurdurmaKodAdlariModel[];
  listeler?: UtDurdurmaKodlariComboValueModel;
  altKodListesi?: UtDurdurmaKodAdlariView;
  saveResponse?: UtDurdurmaKodAdlariModel;
  deleteResponse?: UtDurdurmaKodAdlariModel;
  loaded: boolean; // has the Ut6113 list been loaded
  error?: ErrorModel; // last known error (if any)
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
};

const ut6113Reducer = createReducer(
  initialState,
  on(Ut6113Actions.init, state => ({
    ...state,
    loaded: false,
    error: undefined,
    saveResponse: undefined,
    deleteResponse: undefined,
    data: undefined,
  })),
  on(Ut6113Actions.loadUt6113Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data,
  })),
  on(Ut6113Actions.loadUt6113Failure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(Ut6113Actions.saveUt6113Success, (state, { data }) => ({
    ...state,
    saveResponse: data,
  })),
  on(Ut6113Actions.deleteUt6113Success, (state, { data }) => ({
    ...state,
    deleteResponse: data,
  })),
  on(Ut6113Actions.loadListelerUt6113Success, (state, { data }) => ({
    ...state,
    listeler: data,
  })),
  on(Ut6113Actions.findByAnaKodUt6113Success, (state, { data }) => ({
    ...state,
    altKodListesi: data,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ut6113Reducer(state, action);
}
