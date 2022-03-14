import { Line } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as LineSpeedsActions from './line-speeds.actions';

export const LINESPEEDS_FEATURE_KEY = 'lineSpeeds';

export interface State {
  selectedId?: string | number; // which LineSpeeds record has been selected
  loaded: boolean; // has the LineSpeeds list been loaded
  error?: string | null; // last known error (if any)
  downloadFile: string;
  downloaded: boolean;
  uploadMsg: string;
  hatlar: Line[];
}

export interface LineSpeedsPartialState {
  readonly [LINESPEEDS_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
  downloadFile: null,
  downloaded: false,
  uploadMsg: '',
  hatlar: null,
};

const lineSpeedsReducer = createReducer(
  initialState,
  on(LineSpeedsActions.downloadCompleted, (state, { data }) => ({
    ...state,
    downloadFile: data,
    downloaded: true,
    loaded: true,
  })),
  on(LineSpeedsActions.downloadFailed, (state, { error }) => ({
    ...state,
    error: error,
    downloaded: false,
    loaded: true,
  })),
  on(LineSpeedsActions.uploadCompleted, (state, { message }) => ({
    ...state,
    uploadMsg: message,
    downloaded: false,
    loaded: true,
  })),
  on(LineSpeedsActions.uploadFailed, (state, { error }) => ({
    ...state,
    error: error,
    downloaded: false,
    loaded: true,
  })),
  on(LineSpeedsActions.linesRequestSuccess, (state, { lines }) => ({
    ...state,
    hatlar: lines
      .map(val => {
        return { ...val, hatKodu: Number(val.hatKodu) };
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .sort((a, b) => (a.hatKodu > b.hatKodu ? 1 : -1)) as any as Line[],
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return lineSpeedsReducer(state, action);
}
