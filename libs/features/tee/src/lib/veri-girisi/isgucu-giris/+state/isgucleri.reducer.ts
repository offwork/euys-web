import { Isgucu } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as IsgucleriActions from './isgucleri.actions';

export const ISGUCLERI_FEATURE_KEY = 'isgucleri';

export interface State {
  isgucleri: Isgucu[];
  loaded: boolean; // has the Isgucleri list been loaded
  error?: string | null; // last known error (if any)
  isValid?: boolean;
}

export interface IsgucleriPartialState {
  readonly [ISGUCLERI_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  isgucleri: null,
  loaded: false,
};

const isgucleriReducer = createReducer(
  initialState,
  on(IsgucleriActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(IsgucleriActions.loadIsgucleriSuccess, (state, { isgucleri }) => ({ ...state, loaded: true, isgucleri })),
  on(IsgucleriActions.loadIsgucleriFailure, (state, { error }) => ({ ...state, error })),
  on(IsgucleriActions.updateIsgucu, (state, { event }) => {
    if (event.manpower && event.manpower.idx) {
      const index = state.isgucleri.findIndex(({ idx }) => event.manpower.idx === idx);
      const obj = state.isgucleri[index];
      let value = parseFloat(event.value.replace(',', '.'));
      value = isNaN(value) ? null : value;
      const prefix = state.isgucleri.slice(0, index);
      const suffix = index === state.isgucleri.length - 1 ? [] : state.isgucleri.slice(index + 1);
      const updated = [...prefix, { ...obj, [event.field]: value }, ...suffix];
      return {
        ...state,
        isgucleri: updated,
      };
    } else {
      const obj = event.manpower
        ? event.manpower
        : {
            yil: event.year,
            ay: event.month,
          };
      let value = parseFloat(event.value.replace(',', '.'));
      value = isNaN(value) ? null : value;
      const updatedObj = { ...obj, [event.field]: value };
      const index = event.manpower ? state.isgucleri.indexOf(event.manpower) : null;
      if (!index) {
        return {
          ...state,
          isgucleri: [...state.isgucleri, updatedObj],
        };
      } else {
        const array = [
          ...state.isgucleri.filter((_, i) => i < index),
          updatedObj,
          ...state.isgucleri.filter((_, i) => i > index),
        ];
        return {
          ...state,
          isgucleri: array,
        };
      }
    }
  }),
  on(IsgucleriActions.validateIsgucleri, (state) => {
    const isValid =
      Array.isArray(state.isgucleri) &&
      state.isgucleri.every((isgucu) => {
        const {
          yil,
          ay,
          celikhaneIsgucu,
          kokIsgucu,
          sicak1Isgucu,
          sicak2Isgucu,
          sinterIsgucu,
          soguk1Isgucu,
          soguk2Isgucu,
          surekliIsgucu,
          yuksekfirinIsgucu,
        } = isgucu;

        const fields = [
          celikhaneIsgucu,
          kokIsgucu,
          sicak1Isgucu,
          sicak2Isgucu,
          sinterIsgucu,
          soguk1Isgucu,
          soguk2Isgucu,
          surekliIsgucu,
          yuksekfirinIsgucu,
        ];

        const validCheck1 = (input: unknown) => typeof input === 'number' && input > 0;
        const validCheck2 = (input: unknown) => input === null || input === undefined;

        return /[0-9]{4}/.test(yil) && /[0-9]{2}/.test(ay) && (fields.every(validCheck1) || fields.every(validCheck2));
      });
    return {
      ...state,
      isValid,
    };
  }),
  on(IsgucleriActions.saveIsgucleriSuccess, (state, { data }) => ({ ...state, isgucleri: data, isValid: null })),
  on(IsgucleriActions.saveIsgucleriFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return isgucleriReducer(state, action);
}
