import { TesisGecikme } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as SicakTarihGecikmeAnaliziActions from './sicak-tarih-gecikme-analizi.actions';

export const SICAK_TARIH_GECIKME_ANALIZI_FEATURE_KEY = 'sicakTarihGecikmeAnalizi';

export interface State {
  loaded: boolean; // has the TarihGecikmeAnalizi list been loaded
  error?: string | null; // last known error (if any)
  tesisGecikmeleri: TesisGecikme[];
}

export interface SicakTarihGecikmeAnaliziPartialState {
  readonly [SICAK_TARIH_GECIKME_ANALIZI_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
  tesisGecikmeleri: null,
};

const sicakTarihGecikmeAnaliziReducer = createReducer(
  initialState,
  on(SicakTarihGecikmeAnaliziActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(SicakTarihGecikmeAnaliziActions.loadSicakTarihGecikmeAnaliziSuccess, (state, { tesisGecikmeleri }) => ({
    ...state,
    loaded: !!tesisGecikmeleri,
    tesisGecikmeleri,
  })),
  on(SicakTarihGecikmeAnaliziActions.loadSicakTarihGecikmeAnaliziFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return sicakTarihGecikmeAnaliziReducer(state, action);
}
