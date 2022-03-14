import { Action, createReducer, on } from '@ngrx/store';
import * as YillikUretimPlaniActions from './yillik-uretim-plani.actions';
import { YillikUretimPlaniItem } from './yillik-uretim-plani.models';

export const YILLIK_URETIM_PLANI_FEATURE_KEY = 'yillikUretimPlani';

export interface State {
  selectedId?: string | number; // which YillikUretimPlani record has been selected
  loaded: boolean; // has the YillikUretimPlani list been loaded
  error?: string | null; // last known error (if any)
  yillikUretimPlani: YillikUretimPlaniItem[];
}

export interface YillikUretimPlaniPartialState {
  readonly [YILLIK_URETIM_PLANI_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
  yillikUretimPlani: null,
};

const yillikUretimPlaniReducer = createReducer(
  initialState,
  on(YillikUretimPlaniActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(YillikUretimPlaniActions.loadYillikUretimPlaniSuccess, (state, { yillikUretimPlani }) => ({
    ...state,
    loaded: !!yillikUretimPlani,
    yillikUretimPlani: yillikUretimPlani,
  })),
  on(YillikUretimPlaniActions.loadYillikUretimPlaniFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return yillikUretimPlaniReducer(state, action);
}
