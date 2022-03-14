import { Line } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as HedefFiiliGrafikActions from './hedef-fiili-grafik.actions';
import { HedefFiiliDegerlerModel } from './hedef-fiili-grafik.models';

export const HEDEF_FIILI_GRAFIK_FEATURE_KEY = 'teeHedefFiiliGrafik';

export interface State {
  loaded: boolean; // has the HedefFiiliGrafik list been loaded
  error?: string | null; // last known error (if any)
  hedefFiiliGrafik: HedefFiiliDegerlerModel;
  hatlar: Line[];
}

export interface HedefFiiliGrafikPartialState {
  readonly [HEDEF_FIILI_GRAFIK_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
  hedefFiiliGrafik: null,
  hatlar: null,
};

const hedefFiiliGrafikReducer = createReducer(
  initialState,
  on(HedefFiiliGrafikActions.init, state => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    HedefFiiliGrafikActions.loadHedefFiiliGrafikSuccess,
    (state, { hedefFiiliGrafik }) => ({
      ...state,
      loaded: !!hedefFiiliGrafik,
      hedefFiiliGrafik,
    })
  ),
  on(
    HedefFiiliGrafikActions.loadHedefFiiliGrafikFailure,
    (state, { error }) => ({ ...state, error })
  ),
  on(HedefFiiliGrafikActions.linesRequestSuccess, (state, { lines }) => ({
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
  return hedefFiiliGrafikReducer(state, action);
}
