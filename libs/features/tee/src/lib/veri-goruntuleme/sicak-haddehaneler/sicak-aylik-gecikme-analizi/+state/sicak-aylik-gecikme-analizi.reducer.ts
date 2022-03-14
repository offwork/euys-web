import { AylikGecikmeAnalizi } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as SicakAylikGecikmeAnaliziActions from './sicak-aylik-gecikme-analizi.actions';

export const SICAK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY = 'sicakAylikGecikmeAnalizi';

export interface State {
  loaded: boolean; // has the AylikGecikmeAnalizi list been loaded
  error?: string | null; // last known error (if any)
  gecikmeAnalizi: AylikGecikmeAnalizi;
}

export interface SicakAylikGecikmeAnaliziPartialState {
  readonly [SICAK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
  gecikmeAnalizi: null,
};

const sicakAylikGecikmeAnaliziReducer = createReducer(
  initialState,
  on(SicakAylikGecikmeAnaliziActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(SicakAylikGecikmeAnaliziActions.loadSicakAylikGecikmeAnaliziSuccess, (state, { gecikmeAnalizi }) => ({
    ...state,
    loaded: !!gecikmeAnalizi,
    gecikmeAnalizi,
  })),
  on(SicakAylikGecikmeAnaliziActions.loadSicakAylikGecikmeAnaliziFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return sicakAylikGecikmeAnaliziReducer(state, action);
}
