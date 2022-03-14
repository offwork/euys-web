import { TesisGecikme } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as CuTarihGecikmeAnaliziActions from './cu-tarih-gecikme-analizi.actions';

export const CU_TARIH_GECIKME_ANALIZI_FEATURE_KEY = 'cuTarihGecikmeAnalizi';

export interface State {
  loaded: boolean; // has the TarihGecikmeAnalizi list been loaded
  error?: string | null; // last known error (if any)
  tesisGecikmeleri: TesisGecikme[];
}

export interface CuTarihGecikmeAnaliziPartialState {
  readonly [CU_TARIH_GECIKME_ANALIZI_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
  tesisGecikmeleri: null,
};

const cuTarihGecikmeAnaliziReducer = createReducer(
  initialState,
  on(CuTarihGecikmeAnaliziActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(CuTarihGecikmeAnaliziActions.loadCuTarihGecikmeAnaliziSuccess, (state, { tesisGecikmeleri }) => ({
    ...state,
    loaded: !!tesisGecikmeleri,
    tesisGecikmeleri,
  })),
  on(CuTarihGecikmeAnaliziActions.loadCuTarihGecikmeAnaliziFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return cuTarihGecikmeAnaliziReducer(state, action);
}
