import { Line } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as _ from 'lodash';
import { SimpleColumnData } from '../../models/data-grid-input.model';
import * as KsyfStandarHizActions from './ksyf-standart-hat-hizi.actions';
import { StandarHizlar, StandartHiz } from './ksyf-standart-hat-hizi.models';

export const KSYF_STANDART_HAT_HIZI_FEATURE_KEY = 'ksyfStandartHatHizi';

export interface State {
  standartHiz: StandarHizlar;
  dataGrid: StandartHiz<SimpleColumnData>;
  isInvalid: boolean;
  loaded: boolean; // has the KsyfStandartHatHizi list been loaded
  error?: string | null; // last known error (if any)
  hatlar: Line[];
}

export interface KsyfStandartHatHiziPartialState {
  readonly [KSYF_STANDART_HAT_HIZI_FEATURE_KEY]: State;
}

export const initialState: State = {
  dataGrid: null,
  standartHiz: null,
  isInvalid: true,
  loaded: false,
  hatlar: null,
};

const ksyfStandartHatHiziReducer = createReducer(
  initialState,
  on(KsyfStandarHizActions.initStandartHizPage, state => ({
    ...state,
    ...initialState,
  })),
  on(KsyfStandarHizActions.loadStandartHizSuccess, (state, { standartHiz }) => {
    const keysOfObject = ['line', 'value'];
    const lines = ['Kok', 'Sinter', 'Yüksek Fırın-1', 'Yüksek Fırın-2'];
    const speeds = Object.values(
      _.pick(standartHiz, [
        'kokMaxHiz',
        'sinterMaxHiz',
        'yf1MaxHiz',
        'yf2MaxHiz',
      ])
    );
    return {
      ...state,
      loaded: true,
      standartHiz: standartHiz,
      dataGrid: keysOfObject.reduce((acc, key, index) => {
        return {
          ...acc,
          ...groupingColumn([lines, speeds], key)[index],
        };
      }, {}),
    };
  }),
  on(KsyfStandarHizActions.loadStandartHizFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(KsyfStandarHizActions.updateStandartHizDataGrid, (state, { change }) => {
    return {
      ...state,
      dataGrid: {
        ...state.dataGrid,
        [change.column]: _.cloneDeep(state.dataGrid[change.column]).map(
          column => {
            if (column.row === change.item.row) {
              column.value = parseFloat(
                parseFloat(change.inputValue.split(',').join('.')).toFixed(2)
              );
            }
            return column;
          }
        ),
      },
    };
  }),
  on(KsyfStandarHizActions.verifyStandartHizDataGrid, (state, { key }) => {
    return {
      ...state,
      isInvalid: state.dataGrid[key].some(elm => invalidTotal(elm.value)),
    };
  }),
  on(KsyfStandarHizActions.linesRequestSuccess, (state, { lines }) => ({
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
  return ksyfStandartHatHiziReducer(state, action);
}

//--------------------------------------------------//
// <----------> *** HELPER METHODS *** <----------> //
//--------------------------------------------------//

/**
 * Grouping column
 * @param collections
 * @param prefix
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function groupingColumn(collections: any[], key: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return collections.map((column: any[], idx: number) => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key]: column.map((value: any, index: number) => {
        if (idx === 0) {
          return { value: value, row: index + 1, column: key };
        }
        if (idx === 1) {
          return { value: value, row: index + 1, column: key };
        }
      }),
    };
  });
}

/**
 * Invalids total
 * @param total
 * @returns true if total
 */
function invalidTotal(value: number): boolean {
  return value < 1 || isNaN(value);
}
