import { TesisGecikme } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as SogukTarihGecikmeAnaliziActions from './soguk-tarih-gecikme-analizi.actions';

export const SOGUK_TARIH_GECIKME_ANALIZI_FEATURE_KEY = 'sogukTarihGecikmeAnalizi';

export interface State {
  loaded: boolean; // has the TarihGecikmeAnalizi list been loaded
  error?: string | null; // last known error (if any)
  soguk1: TesisGecikme[];
  ikmal: TesisGecikme[];
  soguk2: TesisGecikme[];
}

export interface SogukTarihGecikmeAnaliziPartialState {
  readonly [SOGUK_TARIH_GECIKME_ANALIZI_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
  soguk1: null,
  ikmal: null,
  soguk2: null,
};

const sogukTarihGecikmeAnaliziReducer = createReducer(
  initialState,
  on(SogukTarihGecikmeAnaliziActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(SogukTarihGecikmeAnaliziActions.loadSogukTarihGecikmeAnaliziSuccess, (state, { tesisGecikmeleri }) => ({
    ...state,
    loaded: !!tesisGecikmeleri,
    soguk1: tesisGecikmeleri.filter(({ tesisTip }) => tesisTip === 'soguk1'),
    ikmal: tesisGecikmeleri.filter(({ tesisTip }) => tesisTip === 'ikmal'),
    soguk2: tesisGecikmeleri.filter(({ tesisTip }) => tesisTip === 'soguk2'),
  })),
  on(SogukTarihGecikmeAnaliziActions.loadSogukTarihGecikmeAnaliziFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return sogukTarihGecikmeAnaliziReducer(state, action);
}
