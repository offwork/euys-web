import { createReducer, on, Action } from '@ngrx/store';
import * as HedeflerActions from './hedefler.actions';
import { Hedef, HedefColumn, Hedefler } from './hedefler.models';
import * as _ from 'lodash';

export const HEDEFLER_FEATURE_KEY = 'hedefler';

export interface State {
  hedefler: Hedef[];
  dataGrid: Hedefler<HedefColumn>;
  treeView: string[];
  isInvalid: boolean;
  loaded: boolean; // has the Hedefler list been loaded
  error?: string | null; // last known error (if any)
}

export interface HedeflerPartialState {
  readonly [HEDEFLER_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  hedefler: [],
  dataGrid: null,
  treeView: [],
  isInvalid: true,
  loaded: false,
};

const hedeflerReducer = createReducer(
  initialState,
  on(HedeflerActions.initHedeflerPage, (state) => ({ ...state, ...initialState })),
  on(HedeflerActions.loadHedeflerSuccess, (state, { hedefler }) => {
    const keysOfObject = ['wsaTee', 'wsaNco', 'wsaPo', 'wsaKo', 'tkTee', 'tkNco', 'tkPo', 'tkKo'];
    return {
      ...state,
      loaded: true,
      hedefler: hedefler,
      dataGrid: keysOfObject.reduce((acc, key) => {
        return { ...acc, [key]: groupingColumn(hedefler, key) };
      }, {}),
      treeView: hedefler.map((value) => value.birim),
    };
  }),
  on(HedeflerActions.loadHedeflerFailure, (state, { error }) => ({ ...state, loaded: true, error: error })),
  on(HedeflerActions.updateHedeflerDataGrid, (state, { change }) => {
    return {
      ...state,
      dataGrid: {
        ...state.dataGrid,
        [change.column]: _.cloneDeep(state.dataGrid[change.column]).map((column) => {
          if (column.sira === change.item.sira) {
            column.value = parseFloat(parseFloat(change.inputValue.split(',').join('.')).toFixed(2));
          }
          return column;
        }),
      },
    };
  }),
  on(HedeflerActions.verifyHedeflerDataGrid, (state) => {
    return {
      ...state,
      isInvalid: Object.keys(state.dataGrid).some((column) => state.dataGrid[column].some((elm) => elm.value > 100)),
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return hedeflerReducer(state, action);
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
function groupingColumn(collections: Hedef[], prefix: string) {
  return collections.reduce((acc, cur, index) => {
    acc.push({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ['sign']: cur[`${prefix}Sign`],
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ['value']: cur[`${prefix}Deger`],
      ['unit']: cur.birim,
      ['sira']: index + 1, // if unnecessary remove it
    });
    return acc;
  }, []);
}
