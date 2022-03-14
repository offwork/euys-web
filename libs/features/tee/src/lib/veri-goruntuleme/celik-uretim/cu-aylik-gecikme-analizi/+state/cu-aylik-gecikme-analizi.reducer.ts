import { AylikGecikmeAnalizi } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as CuAylikGecikmeAnaliziActions from './cu-aylik-gecikme-analizi.actions';

export const CU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY = 'cuAylikGecikmeAnalizi';

export interface State {
  selectedId?: string | number; // which AylikGecikmeAnalizi record has been selected
  loaded: boolean; // has the AylikGecikmeAnalizi list been loaded
  error?: string | null; // last known error (if any)
  gecikmeAnalizi: AylikGecikmeAnalizi;
}

export interface CuAylikGecikmeAnaliziPartialState {
  readonly [CU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
  gecikmeAnalizi: null,
};

const cuAylikGecikmeAnaliziReducer = createReducer(
  initialState,
  on(CuAylikGecikmeAnaliziActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(CuAylikGecikmeAnaliziActions.loadCuAylikGecikmeAnaliziSuccess, (state, { gecikmeAnalizi }) => ({
    ...state,
    loaded: !!gecikmeAnalizi,
    gecikmeAnalizi,
  })),
  on(CuAylikGecikmeAnaliziActions.loadCuAylikGecikmeAnaliziFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return cuAylikGecikmeAnaliziReducer(state, action);
}
