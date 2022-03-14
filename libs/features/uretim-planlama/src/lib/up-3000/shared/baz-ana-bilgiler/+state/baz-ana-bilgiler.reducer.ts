import { ErrorModel, UpYupBazAna } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './baz-ana-bilgiler.actions';

export const BAZ_ANA_BILGILER_FEATURE_KEY = 'bazAnaBilgiler';

export interface State {
  bazAnaBilgiList: UpYupBazAna[];
  year: string;
  error?: ErrorModel;
  loading: boolean;
}

export const initialState: State = {
  bazAnaBilgiList: [],
  year: String(new Date().getFullYear()),
  loading: false,
};

const bazAnaBilgilerReducer = createReducer(
  initialState,
  on(actions.init, state => ({
    ...state,
    bazAnaBilgiList: [],
    error: null,
    loading: true,
  })),
  on(actions.filter, (state, { year }) => ({
    ...state,
    year,
  })),
  on(actions.loadFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(actions.loadSuccess, (state, { data }) => ({
    ...state,
    bazAnaBilgiList: data,
    error: null,
    loading: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return bazAnaBilgilerReducer(state, action);
}
