/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppConfiguration } from '@euys/core';
import {
  BaseRouterStoreState,
  routerReducer,
  RouterReducerState,
} from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as AppActions from './app.actions';

export interface State {
  config: AppConfiguration;
  router: RouterReducerState<BaseRouterStoreState>;
}

export const INITIAL_APP_STATE: AppConfiguration = {
  locale: '',
  application: undefined,
  sideNav: { expandedSidenav: false, preserveState: false },
  languages: [],
  urls: undefined,
  mainNavs: [],
  env: {
    devs: false,
    devTools: false,
    e2e: false,
    local: false,
    localJsonServer: false,
    production: false,
    test: false,
  },
};

const configReducer = createReducer(
  INITIAL_APP_STATE,
  on(AppActions.setInitialState, (_state, action) => action.config)
);

export const reducers: ActionReducerMap<State> = {
  config: configReducer,
  router: routerReducer,
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return function newReducer(state, action) {
    console.group(action.type);
    const nextState = reducer(state, action);
    console.log(`%c prev state`, `color: #f7c405; font-weight: bold`, state);
    console.log(`%c action`, `color: #05f5f7; font-weight: bold`, action);
    console.log(
      `%c next state`,
      `color: #55ff6b; font-weight: bold`,
      nextState
    );
    console.groupEnd();
    return nextState;
  };
}

export const metaReducers: MetaReducer<State>[] = [
  ...(!environment.production ? [logger] : []),
];

export const selectState = (state: State) => state;

export const selecConfig = createSelector(selectState, state => state.config);
