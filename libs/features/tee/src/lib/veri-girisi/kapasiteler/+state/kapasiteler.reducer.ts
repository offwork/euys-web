import { createReducer, on, Action } from '@ngrx/store';
import * as _ from 'lodash';
import { SimpleColumnData } from '../../models/data-grid-input.model';
import * as KapasitelerActions from './kapasiteler.actions';
import { Kapasite, Kapasiteler, lines } from './kapasiteler.models';

export const KAPASITELER_FEATURE_KEY = 'kapasiteler';

export interface State {
  kapasite: Kapasite;
  dataGrid: Kapasiteler<SimpleColumnData>;
  isInvalid: boolean;
  loaded: boolean; // has the Kapasiteler list been loaded
  error?: string | null; // last known error (if any)
}

export interface KapasitelerPartialState {
  readonly [KAPASITELER_FEATURE_KEY]: State;
}

export const initialState: State = {
  kapasite: null,
  dataGrid: null,
  isInvalid: true,
  loaded: false,
};

const kapasitelerReducer = createReducer(
  initialState,
  on(KapasitelerActions.initKapasitelerPage, state => ({
    ...state,
    ...initialState,
  })),
  on(KapasitelerActions.loadKapasitelerSuccess, (state, { kapasite }) => {
    const keysOfObject = ['line', 'value'];
    const capacities = Object.values(_.omit(kapasite, ['idx', 'yil', 'etag']));
    return {
      ...state,
      loaded: true,
      kapasite: kapasite,
      dataGrid: keysOfObject.reduce((acc, key, index) => {
        return {
          ...acc,
          ...groupingColumn([lines, capacities], key)[index],
        };
      }, {}),
    };
  }),
  on(KapasitelerActions.loadKapasitelerFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(KapasitelerActions.updateKapasitelerDataGrid, (state, { change }) => {
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
  on(KapasitelerActions.verifyKapasitelerDataGrid, (state, { key }) => {
    return {
      ...state,
      isInvalid: state.dataGrid[key].some(elm => invalidTotal(elm.value)),
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return kapasitelerReducer(state, action);
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
  return collections.map((column, idx) => {
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
 * @param value
 * @returns true if total
 */
function invalidTotal(value: number): boolean {
  return value < 1 || isNaN(value);
}
