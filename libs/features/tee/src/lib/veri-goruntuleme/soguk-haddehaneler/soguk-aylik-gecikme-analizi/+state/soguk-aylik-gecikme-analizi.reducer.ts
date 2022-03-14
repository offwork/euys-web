import { AylikGecikmeAnalizi } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as SogukAylikGecikmeAnaliziActions from './soguk-aylik-gecikme-analizi.actions';

export const SOGUK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY = 'sogukAylikGecikmeAnalizi';

export interface State {
  loaded: boolean; // has the AylikGecikmeAnalizi list been loaded
  error?: string | null; // last known error (if any)
  gecikmeAnalizi: {
    soguk1: AylikGecikmeAnalizi;
    ikmal: AylikGecikmeAnalizi;
    soguk2: AylikGecikmeAnalizi;
  };
}

export interface SogukAylikGecikmeAnaliziPartialState {
  readonly [SOGUK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
  gecikmeAnalizi: null,
};

const sogukAylikGecikmeAnaliziReducer = createReducer(
  initialState,
  on(SogukAylikGecikmeAnaliziActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(SogukAylikGecikmeAnaliziActions.loadSogukAylikGecikmeAnaliziSuccess, (state, { gecikmeAnalizi }) => ({
    ...state,
    loaded: !!gecikmeAnalizi,
    gecikmeAnalizi: {
      soguk1: {
        aylik: gecikmeAnalizi.aylik.filter(({ tesisTip }) => tesisTip === 'soguk1'),
        yillik: gecikmeAnalizi.yillik.filter(({ tesisTip }) => tesisTip === 'soguk1'),
      },
      ikmal: {
        aylik: gecikmeAnalizi.aylik.filter(({ tesisTip }) => tesisTip === 'ikmal'),
        yillik: gecikmeAnalizi.yillik.filter(({ tesisTip }) => tesisTip === 'ikmal'),
      },
      soguk2: {
        aylik: gecikmeAnalizi.aylik.filter(({ tesisTip }) => tesisTip === 'soguk2'),
        yillik: gecikmeAnalizi.yillik.filter(({ tesisTip }) => tesisTip === 'soguk2'),
      },
    },
  })),
  on(SogukAylikGecikmeAnaliziActions.loadSogukAylikGecikmeAnaliziFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return sogukAylikGecikmeAnaliziReducer(state, action);
}
