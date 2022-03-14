import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Ut6114Entity } from './ut-6114.models';
import {
  ErrorModel,
  UtDurdurmaKodAdlariModel,
  UtDurdurmaKodlariComboValueModel,
} from '@euys/api-interfaces';
import * as Ut6114Actions from '../../ut-6114/+state/ut-6114.actions';

export const UT_6114_FEATURE_KEY = 'ut6114';

export interface State {
  data?: UtDurdurmaKodAdlariModel[];
  listeler?: UtDurdurmaKodlariComboValueModel;
  loaded: boolean; // has the Ut6114 list been loaded
  error?: ErrorModel; // last known error (if any)
}

export interface Ut6114PartialState {
  readonly [UT_6114_FEATURE_KEY]: State;
}

export const ut6114Adapter: EntityAdapter<Ut6114Entity> =
  createEntityAdapter<Ut6114Entity>();

export const initialState: State = ut6114Adapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const ut6114Reducer = createReducer(
  initialState,
  on(Ut6114Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    data: null,
  })),
  on(Ut6114Actions.loadUt6114Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data,
  })),
  on(Ut6114Actions.loadUt6114Failure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(Ut6114Actions.loadListelerUt6114Success, (state, { data }) => ({
    ...state,
    listeler: data,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ut6114Reducer(state, action);
}
