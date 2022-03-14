import { AylikGecikmeAnalizi } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as DuAylikGecikmeAnaliziActions from './du-aylik-gecikme-analizi.actions';

export const DU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY = 'duAylikGecikmeAnalizi';

export interface State {
  selectedId?: string | number; // which AylikGecikmeAnalizi record has been selected
  loaded: boolean; // has the AylikGecikmeAnalizi list been loaded
  error?: string | null; // last known error (if any)
  gecikmeAnalizi: AylikGecikmeAnalizi;
}

export interface DuAylikGecikmeAnaliziPartialState {
  readonly [DU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
  gecikmeAnalizi: null,
};

const duAylikGecikmeAnaliziReducer = createReducer(
  initialState,
  on(DuAylikGecikmeAnaliziActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(DuAylikGecikmeAnaliziActions.loadDuAylikGecikmeAnaliziSuccess, (state, { gecikmeAnalizi }) => ({
    ...state,
    loaded: !!gecikmeAnalizi,
    gecikmeAnalizi,
  })),
  on(DuAylikGecikmeAnaliziActions.loadDuAylikGecikmeAnaliziFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return duAylikGecikmeAnaliziReducer(state, action);
}
