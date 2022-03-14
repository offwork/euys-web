import { TesisGecikme } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as DuTarihGecikmeAnaliziActions from './du-tarih-gecikme-analizi.actions';

export const DU_TARIH_GECIKME_ANALIZI_FEATURE_KEY = 'duTarihGecikmeAnalizi';

export interface State {
  loaded: boolean; // has the TarihGecikmeAnalizi list been loaded
  error?: string | null; // last known error (if any)
  tesisGecikmeleri: TesisGecikme[];
}

export interface DuTarihGecikmeAnaliziPartialState {
  readonly [DU_TARIH_GECIKME_ANALIZI_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
  tesisGecikmeleri: null,
};

const duTarihGecikmeAnaliziReducer = createReducer(
  initialState,
  on(DuTarihGecikmeAnaliziActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(DuTarihGecikmeAnaliziActions.loadDuTarihGecikmeAnaliziSuccess, (state, { tesisGecikmeleri }) => ({
    ...state,
    loaded: !!tesisGecikmeleri,
    tesisGecikmeleri,
  })),
  on(DuTarihGecikmeAnaliziActions.loadDuTarihGecikmeAnaliziFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return duTarihGecikmeAnaliziReducer(state, action);
}
